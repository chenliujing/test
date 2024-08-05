using FlowerWebAPI.Config;
using Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using Model.Dto.UserInfo;
using Model.Other;
using Microsoft.EntityFrameworkCore;

namespace FlowerWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUserService _userService;
        private ICustomJWTService _jwtService;

        public LoginController(IUserService userService, ICustomJWTService jwtService)
        {
            _userService = userService;
            _jwtService = jwtService;
        }

        [HttpGet]
        public async Task<ApiResult> GetToken(string userName, string password)
        {
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
            {
                return ResultHelper.Error("参数不能为空");
            }

            var user = _userService.Login(userName, password);
            if (user == null)
            {
                return ResultHelper.Error("账号不存在，用户名或密码错误！");
            }

            var userRole = await _userService.GetUserRoleNameAsync(user.Id);
            var roleNames= new List<string>();
            var userDto = new UserRes()
            {
                Name = user.Name,
                Id = user.Id,
                RoleNames = []
            };

            foreach (var item in userRole)
            {
               roleNames.Add(item.Role.RoleName);
            }
            userDto.RoleNames = roleNames.ToArray();
            var tokenResponse = new TokenResponse()
            {
                User = userDto,
                Token = _jwtService.GetToken(user)
            };

            return ResultHelper.Success(tokenResponse);
        }
    }
}
