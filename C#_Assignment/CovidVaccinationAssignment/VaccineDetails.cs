using System;
using System.Collections.Generic;



namespace CovidVaccinationAssignment
{
    class VaccineDetails
    {
        static void Main(string[] args)
        {
            Console.WriteLine("***********  Main Menu ***********");
            Console.WriteLine("1.Beneficiary Registration\n2.Vaccination\n3.Exit");
            Console.WriteLine("**********************************");

            List<BenificiaryDetail> detailList = new List<BenificiaryDetail>();
            //BenificiaryDetail BD = new BenificiaryDetail();
            BenificiaryDetail[] BD = new BenificiaryDetail[20];
            int userCount = 0;
            string opinion = "yes";

            do
            {
                Console.WriteLine("Please Enter Your Option Based on the Main Menu:");
                int option = int.Parse(Console.ReadLine());

                if (option == 1 || option == 2 || option == 3)
                {
                    switch (option)
                    {
                        case 1:
                            {
                                string anotherRegistration = "yes";
                                Console.WriteLine("\nWelcome to the Registration Process");

                                do
                                {
                                    //BD = new BenificiaryDetail();
                                    //BD.GetDetails();
                                    //detailList.Add(BD);
                                    BD[userCount] = new BenificiaryDetail();
                                    BD[userCount].GetDetails();
                                    detailList.Add(BD[userCount]);
                                    do
                                    {
                                        if (anotherRegistration != "yes" && anotherRegistration != "no")
                                        {
                                            Console.WriteLine("(Please Enter Your Opinion as yes/no)");
                                        }
                                        Console.WriteLine("\nDo You Want Another Registration : ");
                                        anotherRegistration = Console.ReadLine().ToLower();
                                    } while (anotherRegistration != "yes" && anotherRegistration != "no");
                                } while (anotherRegistration == "yes");


                                for (int detail = 0; detail < detailList.Count; detail++)
                                {
                                    Console.WriteLine($"\nDetails of {detail + 1} User:");
                                    Console.WriteLine($"Full Name : {detailList[detail].FullName}   ||  Age : {detailList[detail].Age}  ||  Gender : {detailList[detail].Gender} ||" +
                                        $" Mobile Number : {detailList[detail].MobileNumber} || City : {detailList[detail].PermanentAddress}");
                                }


                                Console.WriteLine($"\nRegistered Numbers are in the Below Part:");
                                for (int registeredNumber = 0; registeredNumber < detailList.Count; registeredNumber++)
                                {
                                    Console.WriteLine($"{detailList[registeredNumber].RegisterNumber}");
                                }
                                break;
                            }
                        case 2:
                            {
                                Console.WriteLine("\nWelcome to the Vaccination Process");
                                Console.Write("Enter Your Registerd Number:");
                                int givenRegisteredNumber = int.Parse(Console.ReadLine());
                                int present = 0;
                                for (int i = 0; i < detailList.Count; i++)
                                {
                                    if (givenRegisteredNumber == detailList[i].RegisterNumber)
                                    {
                                        present = 1;
                                    }
                                }

                                if (present == 1)
                                {
                                    List<VaccinationClass> vaccineDetail = new List<VaccinationClass>();
                                    Console.WriteLine("Vaccination Process Menu");
                                    Console.WriteLine("1.Take vaccination\n2.Vaccination History\n3.Next Due Date\n4.Exit");
                                    Console.WriteLine("Enter Your Choice : ");
                                    int choice = int.Parse(Console.ReadLine());

                                    if (choice == 1 || choice == 2 || choice == 3 || choice == 4)
                                    {
                                        if (choice == 1)
                                        {
                                            VaccinationClass vaccineType = new VaccinationClass();
                                            Console.WriteLine("Available Vaccination Types:\n1.COVISHIELD\n2.COVACCINE");
                                            string typeOfVaccine = Console.ReadLine();
                                            vaccineType.VaccinationType = typeOfVaccine;
                                            vaccineDetail.Add(vaccineType);
                                            detailList.AddRange((IEnumerable<BenificiaryDetail>)vaccineDetail);
                                            //detailList.AddRange(vaccineDetail[0]);
                                        }
                                        else if (choice == 2)
                                        {
                                            Console.WriteLine("Show the Vaccination Details of the Given Registered Number);
                                        }
                                        else if (choice == 3)
                                        {
                                            Console.WriteLine("Your Next Due Date:");
                                        }
                                        else if (choice == 4)
                                        {
                                            Console.WriteLine("Exit");
                                        }
                                    }
                                    else
                                    {
                                        Console.WriteLine("Vaccination Process Menu");
                                    }
                                }
                                else
                                {
                                    Console.WriteLine("Invalid registration number. Please enter valid Registered Number");
                                }
                                break;
                            }
                        case 3:
                            {
                                Console.WriteLine("\nThanks for Visiting our site!");
                                break;
                            }
                    }
                }
                else
                {
                    Console.WriteLine("Please Enter Your Option as a type of Numerical");
                }

                do
                {
                    if (opinion != "yes" && opinion != "no")
                    {
                        Console.WriteLine("(Please Enter Your Opinion as yes/no)");
                    }
                    Console.WriteLine("\nDo You want to Continue the Process(yes/no) : ");
                    opinion = Console.ReadLine().ToLower();
                } while (opinion != "yes" && opinion != "no");

            } while (opinion == "yes");

        }
    }
}
