using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Dto
{
    public class FlowerRes
    {
        // 属性：Id
        public int Id { get; set; }

        public string Name { get; set; }
        public string Color { get; set; }
        public string ImgUrl { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
        public int Number { get; set; }
    }
}
