using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;
using Model.Dto.UserInfo;
using Model.Dto.UserRole;

namespace Interface
{
    public interface IUserService
    {
        Task<User> GetUserByIdAsync(int id); // 获取用户
        Task<IEnumerable<UserRes>> GetAllUsersAsync(); // 获取所有用户
        Task<bool> AddUserAsync(AddUser user); // 添加用户
        Task<IEnumerable<UserRole>> GetUserRoleNameAsync(int id);
        
            Task<bool> SettingRole(List<AddUserRole> userRole);
      
        Task<bool> UpdateUserAsync(UpdateUser user); // 更新用户
        Task<bool> DeleteUserAsync(int id); // 删除用户
    
        User Login(string username, string password);
    }
}
