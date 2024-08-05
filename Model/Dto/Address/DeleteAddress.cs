using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dto.Address
{
    public class DeleteAddress
    {
        public int Id { get; set; }
        public string Province { get; set; }
        public string City { get; set; }
        public string County { get; set; }
        public string Street { get; set; }
        public int UserId { get; set; }
    }
}
