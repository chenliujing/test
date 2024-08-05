using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.DBContext
{
    /// <summary>
    /// 1.写一个类
    /// 2.实现IDesignTimeContextFactory接口
    /// 3.返回Dbcontext类就行了
    /// </summary>
    public class DbContextDesignTimeFactory : IDesignTimeDbContextFactory<FlowerContext>
    {
        public FlowerContext CreateDbContext(string[] args)
        {
            DbContextOptionsBuilder<FlowerContext> builder = new DbContextOptionsBuilder<FlowerContext>();
            builder.UseSqlServer("Server=.;Database=FlowerDB;TrustServerCertificate=True;User ID=sa;Password=123456;");
            return new FlowerContext(builder.Options);
        }
    }
}

