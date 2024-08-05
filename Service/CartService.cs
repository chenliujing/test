using DataAccess.DBContext;
using Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;
namespace Service
{
    public class CartService:ICartService
    {
        private readonly FlowerContext _flowerContext;

        public CartService(FlowerContext flowerContext)
        {
            _flowerContext = flowerContext;
        }

        public async Task<bool> AddCart(Cart cart)
        {
           _flowerContext.Add(cart);
           await _flowerContext.SaveChangesAsync();
            return true;
        }

    }
}
