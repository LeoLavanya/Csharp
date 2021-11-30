using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CovidVaccinationAssignment
{
    class VaccinationClass
    {
        public string VaccinationType { get; set; }

        public int Dosage { get; set; }
        public DateTime VaccinatedDate { get; set; }

        public enum VaccineName
        {
            CoviShield = 1,CoVaccine
        }

        
    }
}
