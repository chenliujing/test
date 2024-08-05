using FlowerWebAPI.Config;
using Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using Model.Dto.UserInfo;
using Model.Dto.UserRole;
using Model.Other;

namespace FlowerWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IRoleService _roleService;

        public UserController(IUserService userService, IRoleService roleService)
        {
            _userService = userService;
            _roleService = roleService;
        }
        [HttpGet]
        public async Task<ApiResult> GetUsers()
        {
          var users= await _userService.GetAllUsersAsync();
            return ResultHelper.Success(users);
        }
        [HttpGet]
        public async Task<ApiResult> GetUserById(int userId)
        {
            var users = await _userService.GetUserByIdAsync(userId);
            return ResultHelper.Success(users);
        }
        [HttpPost]
        public async Task<ApiResult> AddUser(AddUser addUser)
        {
            var users = await _userService.AddUserAsync(addUser);
            if(users==false)
            {
                return   ResultHelper.Error("该用户名已经存在");
            }
            else
            {
                return ResultHelper.Success(users);
            }
        }
        [HttpPost]
        public async Task<ApiResult> SettingRole(List<AddUserRole> userRole)
        {
            var users = await _userService.SettingRole(userRole);
            return ResultHelper.Success(users);
        }
        [HttpGet]
        public async Task<ApiResult> GetRoleByUserId(int userId)
        {
            var users = await _roleService.GetRolebyUserId(userId);
            return ResultHelper.Success(users);
        }
        [HttpPut]
        public async Task<ApiResult> UpdateUser(UpdateUser updateUser)
        {

            var state = await _userService.UpdateUserAsync(updateUser);
            if (state == false)
            {
                return ResultHelper.Error("该用户名已存在");
            }
            return ResultHelper.Success(state);
        }
    }
}
