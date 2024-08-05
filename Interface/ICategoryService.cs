using Model;
using Model.Dto.Catetory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace Interface
{
    public interface ICategoryService
    {
        // 获取所有分类
        Task<IEnumerable<FlowerCategory>> GetAllCategoriesAsync();

        // 根据 ID 获取分类
        Task<FlowerCategory> GetCategoryByIdAsync(int id);

        // 创建新的分类
        Task CreateCategoryAsync(AddCategory categoryDto);

        // 更新分类
        Task UpdateCategoryAsync(UpdateCategory categoryDto);

        // 删除分类
        Task DeleteCategoryAsync(int id);

        // 根据条件获取分类（例如，按名称搜索）
        Task<IEnumerable<FlowerCategory>> SearchCategoriesAsync(string searchTerm);
    }
}
