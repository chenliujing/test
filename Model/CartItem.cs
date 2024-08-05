using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    // 购物车项类
    public class CartItem
    {
        public int Id { get; set; }
        // 商品ID
        public int ProductId { get; set; }
        public int CartId { get; set; }
        public Cart Cart { get; set; }
        public decimal SumPrice {  get; set; }
        // 数量
        public int Quantity { get; set; }
        

        public Flower Flower { get; set; }
    }
}
