using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dto.UserInfo
{
    public class AddUser
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ImgUrl { get; set; }
        public string[] RoleNames { get; set; } = Array.Empty<string>();

    }
}
