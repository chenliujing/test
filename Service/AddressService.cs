using AutoMapper;
using DataAccess.DBContext;
using Interface;
using Microsoft.EntityFrameworkCore;
using Model;
using Model.Dto.Address;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class AddressService : IAddressService
    {
        private readonly FlowerContext _flowerContext;
        private readonly IMapper _mapper;

        public AddressService(FlowerContext flowerContext, IMapper mapper)
        {
            _flowerContext = flowerContext;
            _mapper = mapper;
        }

        public async Task<bool> AddAddressAsync(AddAddress address)
        {
            var addressnew=_mapper.Map<Address>(address);
            var user=_flowerContext.Users.Find(address.UserId);
            if (user != null)
            {
               
                _flowerContext.Add(addressnew);
                await _flowerContext.SaveChangesAsync();
                return true;
            }
            else
            {
                return false;
            }
         
        }

        public async Task<bool> DeleteAddressAsync(List<Address> address)
        {
          
            if (address != null)
            {
                _flowerContext.RemoveRange(address);
                await _flowerContext.SaveChangesAsync();
                return true;
            }
          
            return false;
        }

        public async Task<IEnumerable<Address>> GetAddressByIdAsync(int id)
        {
            return await _flowerContext.Addresses
                .Include(c => c.User)
                .Where(c => c.UserId == id)
                .ToListAsync();  // 将查询结果转换为 List<Address>
        }

        public async Task<bool> UpdateAddressAsync(UpdateAddress updateAddress)
        {
           var address=_mapper.Map<Address>(updateAddress);
            _flowerContext.Update(address);
            await _flowerContext.SaveChangesAsync();
            return true;
        }
    }
}
