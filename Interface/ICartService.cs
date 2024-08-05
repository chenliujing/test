using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interface
{
    public interface ICartService
    {
        Task<bool> AddCart(Cart cart);
    }
}
