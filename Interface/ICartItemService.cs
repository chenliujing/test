using Model;
using Model.Dto.CartItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interface
{
    // 购物车项服务接口
    public interface ICartItemService
    {
        // 添加购物车项
        Task<bool> AddItemToCartAsync(int userId, int productId, int quantity);

        // 更新购物车项
        Task<bool> UpdateCartItemAsync(int cartItemId, int quantity);

        // 从购物车中删除购物车项
        Task<bool> RemoveItemFromCartAsync(List<int>cartItemId,int userId);

        // 获取购物车中的所有项
        Task<IEnumerable<CartItem>> GetCartItemsAsync(int userId);

    }
}
