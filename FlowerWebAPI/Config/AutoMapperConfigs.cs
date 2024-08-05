using AutoMapper;
using Model;
using Model.Dto;
using Model.Dto.CartItems;
using Model.Dto.Catetory;
using Model.Dto.Role;
using Model.Dto.UserInfo;
using Model.Dto.UserRole;
using Model.Dto.Address;
using Model.Dto.Order;
namespace FlowerWebAPI.Config
{
    /// <summary>
    /// Dto的映射配置
    /// </summary>
    public class AutoMapperConfigs : Profile
    {
        public AutoMapperConfigs()
        {
            //鲜花
            CreateMap<FlowerAdd, Flower>();
            CreateMap<Flower, FlowerRes>();
            CreateMap<FlowerUpdate, Flower>();
            CreateMap<UpdateCategory, FlowerCategory>();
            CreateMap<AddCategory, FlowerCategory>();

            //用户
            CreateMap<UpdateUser, User>();
            CreateMap<AddCategory, User>();
            //角色
            CreateMap<UpdateRole, Role>();
            CreateMap<AddRole, Role>();
            CreateMap<Role, RoleRes>();
            CreateMap<AddUserRole, UserRole>();
            //购物车项
            CreateMap<CartItem,AddCartItem>();
            CreateMap<CartItem, UpdateCartItem>();
            CreateMap<CartItem, CartItemRes>();
            //地址
            CreateMap<AddAddress, Address>();
            CreateMap<UpdateAddress, Address>();
            CreateMap<DeleteAddress, Address>();
            //订单
            CreateMap<AddOrder, Order>();

        }
    }
}
