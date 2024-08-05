using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model.Dto;
namespace Interface
{
    public interface IFlowerService
    {
        // 添加一朵花卉
        bool AddFlower(FlowerAdd flower);

        // 根据 ID 删除花卉
        bool DeleteFlower(int flowerId);

        // 更新花卉信息
        bool UpdateFlower(FlowerUpdate flower);

        // 根据 ID 获取花卉信息
        Flower GetFlowerById(int flowerId);

        // 获取所有花卉
        IEnumerable<Flower> GetAllFlowers();
        IEnumerable<Flower> GetAllFlowerSearch(string text);
    }

}
