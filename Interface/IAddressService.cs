using Model.Dto.UserInfo;
using Model.Dto.UserRole;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;
using Model.Dto.Address;

namespace Interface
{
    public interface IAddressService
    {
        Task<IEnumerable<Address>> GetAddressByIdAsync(int id); 
       
        Task<bool> AddAddressAsync(AddAddress address);
      

  

        Task<bool> UpdateAddressAsync(UpdateAddress address); 
        Task<bool> DeleteAddressAsync(List<Address> address); 
    }
}
