using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Address
    {
        [Key]
        public int Id { get; set; }

       public string Province {  get; set; } 
       public string City {  get; set; } 
       public string County {  get; set; }
       public string Street {  get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }

        // 导航属性
        public User User { get; set; }
    }
}
