using AutoMapper;
using DataAccess.DBContext;
using Interface;
using Microsoft.EntityFrameworkCore;
using Model;
using Model.Dto.CartItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Service
{
    public class CartItemService:ICartItemService
    {
        private readonly FlowerContext _flowerContext;
        private readonly IMapper _mapper;

        public CartItemService(FlowerContext flowerContext, IMapper mapper)
        {
            _flowerContext = flowerContext;
            _mapper = mapper;   
        }

        // 添加购物车项
        public async Task<bool> AddItemToCartAsync(int userId, int productId, int quantity)
        {
            // 确保数量有效
            if (quantity <= 0)
            {
                return false;
            }

            // 使用事务确保数据库一致性
            using var transaction = await _flowerContext.Database.BeginTransactionAsync();

            try
            {
                // 查找购物车和产品
                var cart = await _flowerContext.Carts
                    .Include(c => c.Items)
                    .FirstOrDefaultAsync(c => c.UserId == userId);

                if (cart == null)
                {
                    cart = new Cart
                    {
                        UserId = userId,
                        CreatedDate = DateTime.Now
                    };
                    _flowerContext.Carts.Add(cart);
                    await _flowerContext.SaveChangesAsync();
                }

                var product = await _flowerContext.Flower.FindAsync(productId);
                if (product == null)
                {
                    await transaction.RollbackAsync();
                    return false;
                }

                // 查找现有购物车项
                var existingItem = cart.Items
                    .FirstOrDefault(ci => ci.ProductId == productId);

                if (existingItem != null)
                {
                    // 更新现有购物车项的数量
                    existingItem.Quantity += quantity;
                    existingItem.SumPrice = existingItem.Quantity * product.Price;
                    _flowerContext.CartItems.Update(existingItem);
                }
                else
                {
                    // 添加新购物车项
                    var newItem = new CartItem
                    {
                        CartId = cart.Id,
                        ProductId = productId,
                        Quantity = quantity,
                        SumPrice = quantity * product.Price
                    };
                    _flowerContext.CartItems.Add(newItem);
                }

                await _flowerContext.SaveChangesAsync();
                await transaction.CommitAsync();

                return true;
            }
            catch (Exception)
            {
                await transaction.RollbackAsync();
                throw; // 重新抛出异常，方便调用方进行处理
            }
        }

        // 获取购物车中的所有项
        public async Task<IEnumerable<CartItem>> GetCartItemsAsync(int userId)
        {
            // 从数据库中获取CartItems
            var items = await _flowerContext.CartItems
                .Include(c => c.Cart).Include(c=>c.Flower)
                .Where(c => c.Cart.UserId == userId)
                .ToListAsync();
         
            // 返回映射后的结果
            return items;
        }

        // 从购物车中删除购物车项
        public async Task<bool> RemoveItemFromCartAsync(List<int> cartItemIds, int userId)
        {
            // 查找用户的购物车
            var cart = await _flowerContext.Carts.FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart == null)
            {
                throw new KeyNotFoundException("购物车不存在");
            }

            // 查找购物车中的所有待删除的项
            var cartItemsToRemove = await _flowerContext.CartItems
                .Where(ci => cartItemIds.Contains(ci.Id) && ci.CartId == cart.Id) // 确保只删除属于该购物车的项
                .ToListAsync();

            if (cartItemsToRemove.Count > 0)
            {
                _flowerContext.CartItems.RemoveRange(cartItemsToRemove); // 批量删除
                await _flowerContext.SaveChangesAsync(); // 提交变更
            }

            return cartItemsToRemove.Count > 0; // 返回是否成功删除了任何项目
        }

        // 更新购物车项
        public async Task<bool> UpdateCartItemAsync(int cartItemId, int quantity)
        {
            var item = await _flowerContext.CartItems.FindAsync(cartItemId);
            if (item == null)
            {
                throw new KeyNotFoundException("购物车项不存在");
            }

            item.Quantity = quantity;
            _flowerContext.CartItems.Update(item);
            await _flowerContext.SaveChangesAsync();
            return true;
        }

     
    }
}
