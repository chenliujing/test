using AutoMapper;
using FlowerWebAPI.Config;
using Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using Model.Dto;
using Model.Other;

namespace FlowerWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FlowerController : ControllerBase
    {
        private readonly IFlowerService _flowerService;
        private readonly IMapper _mapper;
        public FlowerController(IFlowerService flowerService, IMapper mapper)
        {
            _flowerService = flowerService;
            _mapper = mapper;
        }

        [HttpGet]
        public ApiResult GetFlower()
        {
          var flowers=  _flowerService.GetAllFlowers();
            if(flowers!=null)
            {
               return ResultHelper.Success(flowers);
            }
            else
            {
               return ResultHelper.Error("没有鲜花");
            }
        }
        [HttpGet]
        public ApiResult GetFlowerSearch(string text="")
        {
            var flowers = _flowerService.GetAllFlowerSearch(text);
            if (flowers!=null)
            {
                return ResultHelper.Success(flowers);
            }
            else
            {
                return ResultHelper.Error("没有鲜花");
            }
        }
        [HttpGet]
        public ApiResult GetFlowerById(int id)
        {
            var flowers = _flowerService.GetFlowerById(id);
            if (flowers != null)
            {
                return ResultHelper.Success(flowers);
            }
            else
            {
                return ResultHelper.Error("没有鲜花");
            }
        }
        [HttpPost]
        public ApiResult AddFlower(FlowerAdd flower)
        {
          var IsSuccess=   _flowerService.AddFlower(flower);
            if (IsSuccess)
            {
               return ResultHelper.Success(flower);
            }
            else
            {
                return ResultHelper.Error("添加失败");
            }
        }
        [HttpPut]
        public ApiResult UpdateFlower(FlowerUpdate flower)
        {
            var IsSuccess = _flowerService.UpdateFlower(flower);
            if (IsSuccess)
            {
                return ResultHelper.Success("修改成功");
            }
            else
            {
                return ResultHelper.Error("修改失败");
            }
        }
        [HttpDelete]
        public ApiResult DeleteFlower(int Id)
        {
            var IsSuccess = _flowerService.DeleteFlower(Id);
            if (IsSuccess)
            {
                return ResultHelper.Success("删除成功");
            }
            else
            {
                return ResultHelper.Error("添加失败");
            }
        }

    }
}
