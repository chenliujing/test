using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Model
{
    public class Order
    {
        // 订单ID
        public int Id { get; set; }
        public string OrderId { get; set; }        // 订单日期
        public DateTime OrderDate { get; set; }
        public int UserId { get; set; }//用户外键

        public User User { get; set; }
        // 订单状态
        public int Status { get; set; } = 0;
        public int ProductId { get; set; }//商品外键
        public decimal ProductPrice {  get; set; }
        public decimal SumPrice {  get; set; }

        [JsonIgnore]
        public Flower Flower { get; set; }
        public int AddressId {  get; set; }//地址外键
        public Address Address { get; set; }
        // 数量
        public int Quantity { get; set; }
        // 生成订单编号的方法
        public string GenerateOrderNumber()
        {
            // 使用当前时间戳加上订单ID生成订单编号
            return $"ORD-{OrderDate:yyyyMMddHHmmss}-{Id}";
        }

    }

    
}
