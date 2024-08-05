using AutoMapper;
using Azure.Core;
using DataAccess.DBContext;
using Interface;
using Microsoft.EntityFrameworkCore;
using Model;
using Model.Dto.Order;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Service
{
    public class OrdersService : IOrderService
    {
        private readonly FlowerContext _flowerContext;
        private readonly IMapper _mapper;

        public OrdersService(FlowerContext flowerContext,IMapper mapper)
        {
            _flowerContext = flowerContext;
            _mapper = mapper;
        }

        public async Task<bool> AddOrder(List<AddOrder> addOrders)
        {
            try
            {
                var orders = _mapper.Map<List<Order>>(addOrders);

                var flowerIds = orders.Select(o => o.ProductId).Distinct().ToList();
                var flowers = await _flowerContext.Flower
                    .Where(f => flowerIds.Contains(f.Id))
                    .Select(f => new { f.Id, f.Price })
                    .ToListAsync();

                var flowerPriceDict = flowers.ToDictionary(f => f.Id, f => f.Price);

                foreach (var order in orders)
                {
                    if (flowerPriceDict.TryGetValue(order.ProductId, out var price))
                    {
                        order.OrderDate = DateTime.Now;
                        order.OrderId = order.GenerateOrderNumber();
                        order.ProductPrice = price;
                        order.SumPrice = price * order.Quantity;
                        _flowerContext.Add(order);
                    }
                    else
                    {
                        // 处理未找到花卉的情况（例如，记录日志）
                    }
                }

                await _flowerContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                // 记录异常信息
                Console.WriteLine($"An error occurred: {ex.Message}");
                // 根据需要进一步处理异常
                return false;
            }
        }

        public async Task<bool> ChuLiOrder(int id)
        {
            var order = await _flowerContext.Order.Include(c => c.Flower).Where(c => c.Id == id).FirstOrDefaultAsync();
            if(order!=null&&order.Flower.Number>0)
            {
                order.Status = 1;
                order.Flower.Number--;
                _flowerContext.Update(order);
                await _flowerContext.SaveChangesAsync();
                return true;
            }
            else
            {
                return false;
            }
        }
        public async Task<bool> CompleteOrder(int id)
        {
            var order = await _flowerContext.Order.Include(c => c.Flower).Where(c => c.Id == id).FirstOrDefaultAsync();
            if (order != null)
            {
                //已完成
                order.Status = 2;
                _flowerContext.Update(order);
                await _flowerContext.SaveChangesAsync();
                return true;
            }
            else
            {
                return false;
            }
        }
        public async Task<bool> CancelOrder(int id)
        {
            var order = await _flowerContext.Order.Include(c => c.Flower).Where(c => c.Id == id).FirstOrDefaultAsync();
            if (order != null)
            {
                //已完成
                order.Status = -1;
                order.Flower.Number+=order.Quantity;
                _flowerContext.Update(order);
                await _flowerContext.SaveChangesAsync();
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<bool> DeleteOrder(int id)
        {
            var order = await _flowerContext.Order.FindAsync(id);
            if (order != null)
            {
                _flowerContext.Order.Remove(order);
              await  _flowerContext.SaveChangesAsync();
                return true;
            }
            return false;
            
          
        }
        public async Task<IEnumerable<Order>> GetAllOrder()
        {
            return await _flowerContext.Order.AsNoTracking()
                .Include(c => c.Address)
                    .Include(c => c.Flower)
                .Include(c => c.User)
              
                .ToListAsync();
        }
        public async Task<IEnumerable<Order>> GetAllOrderByUserId(int userId)
        {
            // 确保 UserId 是有效的
            if (userId <= 0)
            {
                throw new ArgumentException("Invalid user ID", nameof(userId));
            }

            var result= await _flowerContext.Order
                .AsNoTracking() // 提高查询性能，不跟踪实体
                .Include(o => o.Address) // 仅包含必要的导航属性
                .Include(o => o.Flower)
                .Include(o => o.User)
                .Where(o => o.UserId == userId)
                .ToListAsync();
            return result;
        }
       


    }
}
