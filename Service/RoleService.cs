using AutoMapper;
using DataAccess.DBContext;
using Interface;
using Microsoft.EntityFrameworkCore;
using Model;
using Model.Dto.Role;
using Model.Dto.UserInfo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class RoleService : IRoleService
    {
        private readonly FlowerContext _flowerContext;
        private readonly IMapper _mapper;

        public RoleService(FlowerContext flowerContext, IMapper mapper)
        {
            _flowerContext = flowerContext;
            _mapper = mapper;
        }

        public async Task<bool> CreateRoleAsync(AddRole role)
        {
            var newRole = _mapper.Map<Role>(role);
            _flowerContext.Roles.Add(newRole);
            await _flowerContext.SaveChangesAsync();
            return true;
            // 返回新创建角色的 ID

        }

        public async Task DeleteRoleAsync(int roleId)
        {
            // 查找要删除的角色
            var role = await _flowerContext.Roles.FindAsync(roleId);
            if (role != null)
            {
                // 从上下文中移除角色
                _flowerContext.Roles.Remove(role);
                await _flowerContext.SaveChangesAsync();
            }
            else
            {
                throw new KeyNotFoundException("Role not found");
            }
        }
        public async Task<List<Role>> GetAllRoleAsync()
        {
            var existingRole = await _flowerContext.Roles.ToListAsync();
            return existingRole;
        }

        public async Task UpdateRoleAsync(UpdateRole role)
        {
            var newRole = _mapper.Map<Role>(role);
            // 查找要更新的角色
            var existingRole = await _flowerContext.Roles.FindAsync(newRole.Id);
            if (existingRole != null)
            {
                _flowerContext.Update(newRole);
                // 保存更改
                await _flowerContext.SaveChangesAsync();
            }
            else
            {
                throw new KeyNotFoundException("Role not found");
            }
        }
        public async Task<List<UserRole>> GetRolebyUserId(int userId)
        {
            // 查询用户角色并映射到 UserRes 对象
            var roles = await _flowerContext.UserRoles
                .Include(c => c.Role)
                .Where(c => c.UserId == userId)
                .ToListAsync();

            return roles;
        }


    }
}
