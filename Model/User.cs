using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class User
    {
        public User()
        {
            userRoles = new List<UserRole>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ImgUrl { get; set; }
        public List<Order> Order { get; set; }
        public Cart Cart { get; set; }
        public List<UserRole> userRoles { get; set; }
        public List<Message>? messages { get; set; }
        public ICollection<Address> addresses { get; set; }
    }
}
