using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ExpenseRegister.Models
{
    public class Expense
    {
        public int Id {get;set;}
        [DataType(DataType.Date, ErrorMessage = "Date should use MM-dd-yyyy format.")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime Date {get;set;}
        [StringLength(50, MinimumLength=3, ErrorMessage = "Description cannot be longer than 50 characters.")]
        public  string Description {get;set;}
        [DataType(DataType.Currency, ErrorMessage = "Amount must be a valid currency value.")]
        [Column(TypeName = "money")]
        public decimal Amount {get;set;}
        public virtual Category Category { get; set; }
        public virtual SubCategory SubCategory { get; set; }
    }

    public class Category
    {
        public int Id {get;set;}
        public string   Name {get;set;}
    }

    public class SubCategory
    {
        public int Id {get;set;}
        public string   Name {get;set;}
    }
}