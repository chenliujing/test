using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Interface;
using Model.Other;
using FlowerWebAPI.Config;
using Service;
using Model;
using Model.Dto.Address;
using System.Net;
using AutoMapper;
namespace FlowerWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly IAddressService _addressService;
        private readonly IMapper _mapper;

        public AddressController(IAddressService addressService,IMapper mapper)
        {
            _addressService = addressService;
            _mapper = mapper;
        }
        [HttpGet("{userId}")]
        public async Task<ApiResult> GetAddressByUserId(int userId)
        {
            var address = await _addressService.GetAddressByIdAsync(userId);
            if (address == null)
            {
                return ResultHelper.Error("用户还没有地址");
            }
            else
            {
                return ResultHelper.Success(address);
            }
        }
        [HttpPost]
        public async Task<ApiResult> AddAddress(AddAddress address)
        {
            var response = await _addressService.AddAddressAsync(address);
           if(response)
            {
                return ResultHelper.Success(address);
            }
            else
            {
                return ResultHelper.Error("出现错误");
            }
        }
        [HttpDelete]
        public async Task<ApiResult> DeleteAddresses(List<DeleteAddress> deleteAddresses)
        {
            if (deleteAddresses == null || !deleteAddresses.Any())
            {
                return ResultHelper.Error("删除地址列表不能为空");
            }
            var addressesToDelete = _mapper.Map<List<Address>>(deleteAddresses);
           var response= await _addressService.DeleteAddressAsync(addressesToDelete);

            return ResultHelper.Success(response);
        }
        [HttpPut()]
        public async Task<ApiResult> UpdateAddress(UpdateAddress updateAddress)
        {
            var response = await _addressService.UpdateAddressAsync(updateAddress);
            if (response)
            {
                return ResultHelper.Success(response);
            }
            else
            {
                return ResultHelper.Error("用户地址不存在");
            }
        }
    }
  
}
    


