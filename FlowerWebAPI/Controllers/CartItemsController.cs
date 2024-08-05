using FlowerWebAPI.Config;
using Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.Dto.CartItems;
using Model.Other;

namespace FlowerWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CartItemsController : ControllerBase
    {
        private readonly ICartItemService _cartItemService;

        public CartItemsController(ICartItemService cartItemService)
        {
            _cartItemService = cartItemService;
        }
        [HttpPost("{userId}/{productId}/{quantity}")]
        public async Task<ApiResult> AddCartItem(int userId,int productId,int quantity)
        {
         var state=  await _cartItemService.AddItemToCartAsync(userId,productId,quantity);
            return ResultHelper.Success(state);

        }
        [HttpGet("{userId}")]
        public async Task<ApiResult> GetCartItem(int userId)
        {
            var state = await _cartItemService.GetCartItemsAsync(userId);
            return ResultHelper.Success(state);

        }
        [HttpDelete("{userId}")]
        public async Task<ApiResult> DeleteCartItems(int userId,[FromBody]List<int> cartItemId)
        {
            var state = await _cartItemService.RemoveItemFromCartAsync(cartItemId,userId);
            return ResultHelper.Success(state);

        }
        [HttpPut("{cartItemId}/{quantity}")]
        public async Task<ApiResult> UpdateCartItems(int cartItemId,int quantity)
        {
            var state = await _cartItemService.UpdateCartItemAsync(cartItemId,quantity);
            return ResultHelper.Success(state);

        }
    }
}
