using FlowerWebAPI.Config;
using Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using Model.Dto.Order;
using Model.Other;
using Service;

namespace FlowerWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _OrderService;

        public OrderController(IOrderService OrderService)
        {
            _OrderService = OrderService;
        }
        [HttpPost]
        public async Task<ApiResult> AddOrder(List<AddOrder> Order)
        {
            var state = await _OrderService.AddOrder(Order);
            return ResultHelper.Success(state);

        }
        [HttpGet("{userId}")]
        public async Task<ApiResult> GetOrder(int userId)
        {
            var state = await _OrderService.GetAllOrderByUserId(userId);
            return ResultHelper.Success(state);

        }
        [HttpGet()]
        public async Task<ApiResult> GetAllOrder()
        {
            var state = await _OrderService.GetAllOrder();
            return ResultHelper.Success(state);

        }
        [HttpGet("{id}")]
        public async Task<ApiResult> DeleteOrder(int id)
        {
            var state = await _OrderService.DeleteOrder(id);
            return ResultHelper.Success(state);

        }
        [HttpPost("{id}")]
        public async Task<ApiResult> ChuliOrder(int id)
        {
            var state = await _OrderService.ChuLiOrder(id);
            return ResultHelper.Success(state);

        }
        [HttpPost("{id}")]
        public async Task<ApiResult> CompleteOrder(int id)
        {
            var state = await _OrderService.CompleteOrder(id);
            return ResultHelper.Success(state);

        }
        [HttpPost("{id}")]
        public async Task<ApiResult> CancelOrder(int id)
        {
            var state = await _OrderService.CancelOrder(id);
            return ResultHelper.Success(state);

        }
    }
  

}
