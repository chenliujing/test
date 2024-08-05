using DataAccess.DBContext;
using Interface;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Model.Dto;
using System.Security.Cryptography;
namespace Service
{
    public class Flowerervice : IFlowerService
    {
        private readonly FlowerContext _context;
        private readonly IMapper _mapper;

        public Flowerervice(FlowerContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public bool AddFlower(FlowerAdd flower)
        {
            Flower flower1 = _mapper.Map<Flower>(flower);
           _context.Add(flower1);
            _context.SaveChanges();
            return true;
           
        }

        public bool DeleteFlower(int flowerId)
        {
            // 从数据库上下文中查找花卉
            var flower = _context.Flower.Find(flowerId);

            if (flower == null)
            {
                // 如果未找到花卉，则删除失败
                return false;
            }

            // 删除花卉并提交更改
            _context.Flower.Remove(flower);
            _context.SaveChanges();

            // 删除成功
            return true;
        }

        public IEnumerable<Flower> GetAllFlowers()
        {
            var flowers = _context.Flower.Include(c=>c.Category).ToList();
            return flowers;
        }

        public IEnumerable<Flower> GetAllFlowerSearch(string text)
        {
          

            // 去除输入文本中的多余空格
            string cleanedText = text.Trim();

            var flowers = _context.Flower
                .Include(c => c.Category)
                .Where(c => c.Category.Name.Contains(cleanedText) || c.Name.Contains(cleanedText))
                .ToList();

            return flowers;
        }

        public Flower GetFlowerById(int flowerId)
        {
            // 从数据库中获取指定 ID 的花卉
            return _context.Flower.Find(flowerId);
        }

        public bool UpdateFlower(FlowerUpdate flower)
        {
              Flower flower1 = _mapper.Map<Flower>(flower);
            // 查找需要更新的花卉
            var existingFlower = _context.Flower.Find(flower.Id);

            if (existingFlower == null)
            {
                // 未找到花卉，更新失败
                return false;
            }

            // 更新现有的花卉信息
            _context.Entry(existingFlower).CurrentValues.SetValues(flower);

            // 提交更改
            _context.SaveChanges();

            // 更新成功
            return true;
        }
    }
}

