using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Model
{
    public class Flower
    {
        // 属性：Id
        public int Id { get; set; }

        // 属性：花的名称
        public string Name { get; set; }
        public string Description { get; set; }

        // 属性：花的颜色
        public string Color { get; set; }
        public string ImgUrl { get; set; }

        // 属性：花的价格
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
        public FlowerCategory Category { get; set; }
        public int Number { get; set; }
        public CartItem CartItem { get; set; }
        [JsonIgnore]
        public Order Order { get; set; }
   

        // 示例方法：计算折扣后的价格
        public decimal GetDiscountedPrice(decimal discountRate)
        {
            return Price - (Price * discountRate);
        }
    }
}
