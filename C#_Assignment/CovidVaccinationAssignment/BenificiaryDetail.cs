using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CovidVaccinationAssignment
{
    class BenificiaryDetail
    {
        public string FullName { get; set; }
        public long RegisterNumber { get; set; }
        public long MobileNumber { get; set; }
        public string PermanentAddress { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }

        static int AutoIncrement = 1001;

        public void GetDetails()
        {
            Console.Write("Enter Your FullName : ");
            FullName = Console.ReadLine();
            RegisterNumber = AutoIncrement;
            Console.Write($"Enter Your Register Number : {RegisterNumber}\n");
            Console.Write("Enter Your Mobile Number : ");
            MobileNumber = long.Parse(Console.ReadLine());
            Console.Write("Enter Your Address : ");
            PermanentAddress = Console.ReadLine();
            Console.Write("Enter Your Age(Specify in Numerical) : ");
            Age = int.Parse(Console.ReadLine());
            Console.Write("Enter Your Gender(Male/Female/Others) : ");
            Gender = Console.ReadLine();
            AutoIncrement++;
        }

        public void ShowDetails()
        {

        }
        public void NextDueDate()
        {
            Console.Write("Your Next Due Date : }");
            DateTime DateNum = new DateTime(2021, 8, 10, 10, 40, 32);
            Console.WriteLine(DateNum);
            string str = DateNum.ToString();
            Console.WriteLine("Conversion into a string : "+ str);
        }
    }
}
