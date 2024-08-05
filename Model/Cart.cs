using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Cart
    {
        // 购物车ID
        public int Id { get; set; }

        // 购物车创建日期
        public DateTime CreatedDate { get; set; }

        // 用户ID
        public int UserId { get; set; }
        public User User { get; set; }

        // 购物车项列表
        public List<CartItem>? Items { get; set; } = new List<CartItem>();

        // 默认构造函数
        public Cart()
        {
            CreatedDate = DateTime.Now;
        }
        public decimal SumPrice {  get; set; }


        // 打印购物车信息

    }

}
