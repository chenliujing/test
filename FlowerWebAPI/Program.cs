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
app.UseStaticFiles(); // ���þ�̬�ļ��м��

app.UseCors("CorsPolicy");
#region ��Ȩ��Ȩ
app.UseAuthentication();
app.UseAuthorization();
#endregion

//ʹ�ÿ������


app.MapControllers();

app.Run();
