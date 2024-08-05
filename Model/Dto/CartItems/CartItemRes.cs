using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dto.CartItems
{
    public class CartItemRes
    {
        public int ProductId { get; set; }
        public int CartId { get; set; }
        public string Name { get; set; }
        public string ImgUrl {  get; set; }
        public decimal Price { get; set; }
        // 数量
        public int Quantity { get; set; }

    }
}
