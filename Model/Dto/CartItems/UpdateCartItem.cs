using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dto.CartItems
{
    public class UpdateCartItem
    {
        public int ProductId { get; set; }
        public int CartId { get; set; }

        public decimal Price { get; set; }
        // 数量
        public int Quantity { get; set; }

    }
}
