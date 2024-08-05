using Model;
using Model.Dto.Order;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interface
{
    public  interface IOrderService
    {
        Task<bool> AddOrder(List<AddOrder> orders);
        Task<IEnumerable<Order>> GetAllOrderByUserId(int userId);
       Task<IEnumerable<Order>> GetAllOrder();
      
        Task<bool> DeleteOrder(int id);
        Task<bool> ChuLiOrder(int id);
        Task<bool> CompleteOrder(int id);
        Task<bool> CancelOrder(int id);
    }
}
