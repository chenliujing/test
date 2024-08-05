using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dto.Role
{
    public class UpdateRole
    {
        public int Id { get; set; }
        public string RoleName { get; set; } = string.Empty;
    }
}
