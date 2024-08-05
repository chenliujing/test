using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;
using DataAccess.DBContext;
using Microsoft.EntityFrameworkCore;
using Interface;
using Model.Dto.UserInfo;
using AutoMapper;
using Model.Dto.UserRole;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Azure.Core;
namespace Service
{
    public class UserService : IUserService
    {
        private readonly FlowerContext _flowerContext;
        private readonly IMapper _mapper;

        public UserService(FlowerContext flowerContext, IMapper mapper)
        {
            _flowerContext = flowerContext;
            _mapper = mapper;
        }

        // 获取用户 by Id
        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _flowerContext.Users.FindAsync(id);
        }

        // 获取用户的角色
        public async Task<IEnumerable<UserRole>> GetUserRoleNameAsync(int id)
        {
          return await _flowerContext.UserRoles.Include(c=>c.User).Include(c=>c.Role).Where(c=>c.UserId==id).ToListAsync();

        }

        // 获取所有用户
        public async Task<IEnumerable<UserRes>> GetAllUsersAsync()
        {
            var userResList = await _flowerContext.Users
                .Include(u => u.userRoles)
                .ThenInclude(ur => ur.Role)
                .Select(u => new UserRes
                {
                    Id = u.Id,
                    Name = u.Name,
                    Email = u.Email,
                    Password = u.Password,
                    RoleNames = u.userRoles.Select(ur => ur.Role.RoleName).ToArray()
                })
                .ToListAsync();

            return userResList;
        }
        public async Task<bool> SettingRole(List<AddUserRole> userRole)
        {
            // 将 AddUserRole 映射到 UserRole
            var userRoles = _mapper.Map<List<UserRole>>(userRole);

            // 获取所有需要删除的 UserRole 对象
            var userIds = userRoles.Select(r => r.UserId).Distinct().ToList();
            var rolesToRemove = _flowerContext.UserRoles
                .Where(c => userIds.Contains(c.UserId))
                .ToList();

            // 删除旧的 UserRole 对象
            _flowerContext.UserRoles.RemoveRange(rolesToRemove);

            // 添加新的 UserRole 对象
            _flowerContext.UserRoles.AddRange(userRoles);

            // 保存更改到数据库
            await _flowerContext.SaveChangesAsync();

            return true;
        }

        public async Task<bool> AddRole(AddUser user)
        {

            // 检查用户是否已存在（可选）
            var existingUser = await _flowerContext.Users
                .AnyAsync(u => u.Email == user.Email); // 假设用 Email 唯一标识用户
            var User = new User
            {
                Name = user.Name,
                Email = user.Email,
                Password = user.Password,
            };
            if (existingUser)
            {
                throw new InvalidOperationException("用户已存在");
            }


            _flowerContext.Users.Add(User);
            await _flowerContext.SaveChangesAsync();
            var addUser = await _flowerContext.Users.Where(c => c.Email == User.Email).FirstOrDefaultAsync();
            var RoleNames = user.RoleNames;
            foreach (var roleName in RoleNames)
            {
                var role = _flowerContext.Roles.Where(c => c.RoleName == roleName).FirstOrDefault();
                var userRole = new UserRole()
                {
                    UserId = addUser.Id,
                    RoleId = role.Id
                };
                _flowerContext.UserRoles.Add(userRole);

            }

            await _flowerContext.SaveChangesAsync();
            return true;
        }
        // 添加用户
        public async Task<bool> AddUserAsync(AddUser user)
        {
          
            // 检查用户是否已存在（可选）
            var existingUser = await _flowerContext.Users
                .AnyAsync(u => u.Name == user.Name); 
            var User = new User
            {
                Name = user.Name,
                Email = user.Email,
                Password = user.Password,
                ImgUrl = user.ImgUrl,


            };
          
            if (existingUser)
            {
                return false;
            }
          
            _flowerContext.Users.Add(User);
            await _flowerContext.SaveChangesAsync();
            var role = _flowerContext.Roles.Where(c => c.RoleName == "用户").FirstOrDefault();
            var userRole = new UserRole()
            {
                UserId = User.Id,
                RoleId = role.Id
            };
            _flowerContext.Add(userRole);
            await _flowerContext.SaveChangesAsync();
            Cart cart = new Cart()
            {
                User = User,
                CreatedDate = DateTime.Now,
                UserId = User.Id
            };
         
            _flowerContext.Add(cart);
            await _flowerContext.SaveChangesAsync();
            return true;
        }

        // 更新用户
        public async Task<bool> UpdateUserAsync(UpdateUser updateUser)
        {
            // 将 UpdateUser 映射到 User 对象
            var userToUpdate = _mapper.Map<User>(updateUser);

            // 查找要更新的用户
            var existingUser = await _flowerContext.Users.SingleOrDefaultAsync(u => u.Id == userToUpdate.Id);
            if (existingUser == null)
            {
                return false;
            }

            // 检查哪些字段发生了变化并进行更新
            bool isUpdated = false;

            if (existingUser.Name != userToUpdate.Name)
            {
                existingUser.Name = userToUpdate.Name;
                isUpdated = true;
            }

            if (existingUser.Email != userToUpdate.Email)
            {
                existingUser.Email = userToUpdate.Email;
                isUpdated = true;
            }

            if (existingUser.Password != userToUpdate.Password)
            {
                existingUser.Password = userToUpdate.Password;
                isUpdated = true;
            }
            if (existingUser.ImgUrl != userToUpdate.ImgUrl)
            {
                existingUser.ImgUrl = userToUpdate.ImgUrl;
                isUpdated = true;
            }

            // 如果没有更新任何字段，直接返回
            if (!isUpdated)
            {
                return false;
            }

            try
            {
                // 保存更改到数据库
                await _flowerContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                // 记录异常日志
                // logger.LogError(ex, "更新用户出错");
                Console.WriteLine(ex.Message);
                return false;
            }
        }

   

        // 删除用户
        public async Task<bool> DeleteUserAsync(int id)
        {
            var user = await _flowerContext.Users.FindAsync(id);
            if (user != null)
            {
                _flowerContext.Users.Remove(user);
                await _flowerContext.SaveChangesAsync();
                return true;
            }
            else
            {
                throw new KeyNotFoundException("用户未找到");
            }
        }

        public  User Login(string username, string password)
        {
            var user= _flowerContext.Users.Where(c=>c.Name==username&&c.Password==password).FirstOrDefault();
            if(user != null)
            {
                return user;
            }
            else
            {
                return null;
            }
        }
    }
}
