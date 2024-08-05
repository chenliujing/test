using Autofac;
using Autofac.Core;
using Autofac.Extensions.DependencyInjection;
using DataAccess.DBContext;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Model.Other;
using System.Configuration;
using System.Text;

namespace FlowerWebAPI.Config
{
    public static class HostbuilderExtend
    {
        public static void Register(this WebApplicationBuilder builder, IConfiguration configuration)
        {
            builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
            builder.Host.ConfigureContainer<ContainerBuilder>(builder =>
            {
              

                //注册接口和实现层
                builder.RegisterModule(new AutofacModuleRegister());
            });
            builder.Services.AddAutoMapper(typeof(AutoMapperConfigs));
            builder.Services.Configure<FileUploadOptions>(builder.Configuration.GetSection("FileUpload"));
            // 获取配置中的连接字符串
            var connectionString = configuration.GetConnectionString("FlowerDB");

            // 配置 DbContext
            builder.Services.AddDbContext<FlowerContext>(options =>
                options.UseSqlServer(connectionString));
            builder.Services.Configure<JWTTokenOptions>(builder.Configuration.GetSection("JWTTokenOptions"));
            #region Jwt校验
            JWTTokenOptions tokenOptions = new JWTTokenOptions();
            builder.Configuration.Bind("JWTTokenOptions", tokenOptions);
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateIssuerSigningKey = true,
                    ValidAudience = tokenOptions.Audience,
                    ValidIssuer = tokenOptions.Issuer,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenOptions.SecurityKey))
                };
            });
         
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", opt => opt.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().WithExposedHeaders("X-Pagination"));
            });
            //设置Json返回的日期格式
            builder.Services.AddControllers().AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                options.SerializerSettings.DateFormatString = "yyyy-MM-dd HH:mm:ss";
            });
            #endregion
        }
    }
}
