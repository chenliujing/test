using FlowerWebAPI.Config;
using Microsoft.Extensions.FileProviders;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Register(builder.Configuration);
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseStaticFiles(); // 启用静态文件中间件

app.UseCors("CorsPolicy");
#region 鉴权授权
app.UseAuthentication();
app.UseAuthorization();
#endregion

//使用跨域策略


app.MapControllers();

app.Run();
