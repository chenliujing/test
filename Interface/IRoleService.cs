using Model;
using Model.Dto.Role;
using Model.Dto.UserInfo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interface
{
    public interface IRoleService
    {
        Task<bool> CreateRoleAsync(AddRole role);

        Task UpdateRoleAsync(UpdateRole role);

        Task DeleteRoleAsync(int roleId);

        //获取用户的所有角色

        Task<List<UserRole>> GetRolebyUserId(int userId);
        Task<List<Role>> GetAllRoleAsync();
    }
}
