using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataAccess.DBContext;
using Model;
using Interface;
using Model.Other;
using FlowerWebAPI.Config;
using Model.Dto.Role;

namespace FlowerWebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly IRoleService _context;

        public RoleController(IRoleService context)
        {
            _context = context;
        }

        // GET: api/Role
        [HttpGet]
        public async Task<ApiResult> GetRoles()
        {
            var Roles= await _context.GetAllRoleAsync();
           return ResultHelper.Success(Roles);
        }

       

        // PUT: api/Role/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ApiResult> PutRole(UpdateRole role)
        {
           await _context.UpdateRoleAsync(role);
         return   ResultHelper.Success("修改成功");
          
        }

        // POST: api/Role
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ApiResult> PostRole(AddRole role)
        {
         var isSuccess= await _context.CreateRoleAsync(role);
        return  ResultHelper.Success(isSuccess);
        }

        // DELETE: api/Role/5
        [HttpDelete("{id}")]
        public async Task<ApiResult> DeleteRole(int id)
        {
          await _context.DeleteRoleAsync(id);
            return ResultHelper.Success("删除成功");
        }
    }
}
