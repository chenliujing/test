using AutoMapper;
using DataAccess.DBContext;
using Interface;
using Microsoft.EntityFrameworkCore;
using Model;
using Model.Dto.Catetory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
  
    public class CategoryService : ICategoryService
    {
        private readonly FlowerContext _flowerContext;
        private readonly IMapper _mapper;

        public CategoryService(FlowerContext flowerContext, IMapper mapper)
        {
            _flowerContext = flowerContext;
            _mapper = mapper;
        }

        public async Task CreateCategoryAsync(AddCategory categoryDto)
        {
           var category=_mapper.Map<FlowerCategory>(categoryDto);

            _flowerContext.FlowerCategories.Add(category);
            await _flowerContext.SaveChangesAsync();
        }

        public async Task DeleteCategoryAsync(int id)
        {
            // 查找分类
            var category = await _flowerContext.FlowerCategories.FindAsync(id);
           

            _flowerContext.FlowerCategories.Remove(category);
            await _flowerContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<FlowerCategory>> GetAllCategoriesAsync()
        {
            // 获取所有分类
            return await _flowerContext.FlowerCategories.ToListAsync();
        }

        public async Task<FlowerCategory> GetCategoryByIdAsync(int id)
        {
            // 根据 ID 获取分类
            var category = await _flowerContext.FlowerCategories.FindAsync(id);
           
            return category;
        }

        public async Task<IEnumerable<FlowerCategory>> SearchCategoriesAsync(string searchTerm)
        {
            // 根据搜索条件获取分类
            if (string.IsNullOrWhiteSpace(searchTerm))
            {
                return await GetAllCategoriesAsync(); // 如果搜索词为空，返回所有分类
            }

            return await _flowerContext.FlowerCategories
                .Where(c => c.Name.Contains(searchTerm))
                .ToListAsync();
        }

        public async Task UpdateCategoryAsync( UpdateCategory categoryDto)
        {
         var category=_mapper.Map<FlowerCategory>(categoryDto);
            // 提交更改
            _flowerContext.FlowerCategories.Update(category);
            await _flowerContext.SaveChangesAsync();
        }
    }
}
