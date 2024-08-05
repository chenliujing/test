using Model.Dto.UserInfo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class TokenResponse
    {
        public string Token { get; set; }
        public UserRes User { get; set; } // 假设你有一个 UserDto 类用于表示用户信息
    }
}
