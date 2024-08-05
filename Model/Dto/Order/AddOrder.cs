using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dto.Order
{
    public class AddOrder
    {
        public int quantity {  get; set; }
        public int productId {  get; set; } 
        public int addressId {  get; set; } 
        public int userId {  get; set; }    
    }
}
