using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Model;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.DBContext
{
    public class FlowerContext:DbContext
    {
       public FlowerContext(DbContextOptions<FlowerContext> options) : base(options) 
        { 
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cart>(entity =>
            {
                entity.Property(o => o.SumPrice)
       .HasPrecision(18, 2); // 设置精度和规模
                entity.HasKey(c => c.Id);
                entity.HasOne(c => c.User).WithOne(c => c.Cart).HasForeignKey<Cart>(c => c.UserId); 
            
     
            });
            modelBuilder.Entity<User>(entity =>
            {
            entity.HasKey(c => c.Id);
                entity.HasMany(c=>c.addresses).WithOne(c=>c.User).HasForeignKey(c=>c.UserId).OnDelete(DeleteBehavior.Cascade);
            });
            modelBuilder.Entity<Address>(entity =>
            {
                entity.HasKey(c => c.Id);
             
            });
            modelBuilder.Entity<Role>(entity =>
            {
               entity.HasKey(c=>c.Id);
                
            });
            modelBuilder.Entity<CartItem>(entity =>
            {
              entity.Property(c => c.SumPrice) .HasPrecision(18, 2); // 设置精度和规模
                entity.HasKey(c => c.Id);
                entity.HasOne(c => c.Cart).WithMany(c => c.Items).HasForeignKey(c => c.CartId);
              
            });
            modelBuilder.Entity<Message>(entity =>
            {
            
                entity.HasKey(c => c.Id);
                entity.HasOne(c=>c.User).WithMany(c=>c.messages).HasForeignKey(c => c.UserId);

            });
            modelBuilder.Entity<Order>(entity =>
            {
                entity.Property(o => o.ProductPrice)
        .HasPrecision(18, 2); // 设置精度和规模
                entity.Property(o => o.SumPrice)
       .HasPrecision(18, 2); // 设置精度和规模
                entity.HasKey(c => c.Id);
                entity.HasOne(c => c.Address).WithOne().HasForeignKey<Order>(c => c.AddressId).OnDelete(DeleteBehavior.NoAction);
                entity.HasOne(c => c.User).WithMany(c => c.Order).HasForeignKey(c => c.UserId);
                entity.HasOne(c => c.Flower).WithOne(c => c.Order).HasForeignKey<Order>(c => c.ProductId);

            });
        
            modelBuilder.Entity<UserRole>(entity =>
            {
                
                entity.HasKey(c => c.Id);
                entity.HasOne(c=>c.User).WithMany(c=>c.userRoles).HasForeignKey(c => c.UserId); 
                entity.HasOne(c=>c.Role).WithMany(c=>c.UserRoles).HasForeignKey(c => c.RoleId); 
                
            });
            modelBuilder.Entity<Flower>(entity =>
            {
                entity.Property(c => c.Price).HasPrecision(18, 2); // 设置精度和规模
                entity.HasKey(c => c.Id);
                entity.HasOne(c => c.Category).WithMany(c => c.Flower).HasForeignKey(c => c.CategoryId);
                entity.HasOne(c => c.CartItem).WithOne(c => c.Flower).HasForeignKey<CartItem>(c => c.ProductId);
               

            });

            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Flower> Flower { get; set; }   
        public DbSet<User> Users { get; set; }  
        public DbSet<Role> Roles { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
      
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Message> Message { get; set; }
       public DbSet<FlowerCategory> FlowerCategories { get; set; } 
       public DbSet<Address> Addresses { get; set; } 
    }
}
