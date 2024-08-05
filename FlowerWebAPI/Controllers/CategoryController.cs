using FlowerWebAPI.Config;
using Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.Dto.Catetory;
using Model.Other;

namespace FlowerWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        [HttpGet]
        public async Task<ApiResult> GetCategory()
        {
          var category=  await _categoryService.GetAllCategoriesAsync();
           return ResultHelper.Success(category);
        }
        [HttpPost]
        public async Task<ApiResult> AddCategory(AddCategory addCategory)
        {
              await _categoryService.CreateCategoryAsync(addCategory);
            return ResultHelper.Success("添加成功");
        }
        [HttpPut]
        public async Task<ApiResult> UpdateCategory(UpdateCategory category)
        {
           await _categoryService.UpdateCategoryAsync(category);
            return ResultHelper.Success("修改成功");
        }
        [HttpDelete]
        public async Task<ApiResult> DeleteCategory(int id)
        {
             await _categoryService.DeleteCategoryAsync(id);
            return ResultHelper.Success("删除成功");
        }

    }
}
