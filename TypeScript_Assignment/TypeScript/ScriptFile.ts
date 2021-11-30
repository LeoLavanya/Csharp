export{}

let autoIncrementUserId = 1000;
let autoIncrementCourseId = 100;

class UserDetails
{
    userId : string;
    name :string;
    age: number;
    mobileNumber:number;

    constructor(newUserName : string,newUserAge : number,newUserMobileNumber :number)
    {
        autoIncrementUserId++;
        this.userId = "OC" + autoIncrementUserId;
        this.name = newUserName;
        this.age = newUserAge;
        this.mobileNumber = newUserMobileNumber;
    }

}
let userDetailObject: Array<UserDetails> = new Array<UserDetails>();
userDetailObject.push(new UserDetails("leo",23,6385709104));
userDetailObject.push(new UserDetails("lavanya",20,7418529614));

class enrolledCourse
{
    courseId : number;
    courseName :string;
    reqDays: number;
    enrolledUserID: string;

    constructor(newCourseName : string,newCourseReqDays : number,newUserEnrolledUserID :string)
    {
        autoIncrementCourseId++;
        this.courseId = autoIncrementCourseId;
        this.courseName = newCourseName;
        this.reqDays = newCourseReqDays;
        this.enrolledUserID = newUserEnrolledUserID;
    }

}
let enrolledDetailObject: Array<enrolledCourse> = new Array<enrolledCourse>();
enrolledDetailObject.push(new enrolledCourse("Java",10,"OC1001"));
enrolledDetailObject.push(new enrolledCourse("C",11,"OC1002"));


function registrationProcess()
{
    var homePageVariable = (document.getElementById("homePage") as HTMLElement).style.display = "none";
    var registrationPageVariable = (document.getElementById("registrationProcess") as HTMLElement).style.display = "block";

}

function registrationStep()
{
    let readNewUserName = (document.getElementById('newUserName') as HTMLInputElement).value;
    let readNewUserAge = (document.getElementById('newUserAge') as HTMLInputElement).value;
    let readNewUserPhoneNumber = (document.getElementById('newUserMobileNumber') as HTMLInputElement).value;
    userDetailObject.push(new UserDetails(readNewUserName,23, 1231231));
    // let readNewUserName = (document.getElementById('newUserName') as HTMLInputElement).value;
    // let readNewUserAge = (document.getElementById('newUserAge') as HTMLInputElement).value;
    // let readNewUserPhoneNumber = (document.getElementById('newUserMobileNumber') as HTMLInputElement).value;
    // userDetailObject.push(new UserDetails(readNewUserName, +readNewUserAge, +readNewUserPhoneNumber));

    // alert("Your Registration Process is Done Successfully")

}

function loginProcess()
{
    var homePageVariable = (document.getElementById("homePage") as HTMLElement).style.display = "none";
    var loginPageVariable = (document.getElementById("loginProcess") as HTMLElement).style.display = "block";

}

function courseDetails()
{
    var loginPageVariable = (document.getElementById("loginProcess") as HTMLElement).style.display = "none";
    // var homePageVariable = (document.getElementById("homePage") as HTMLElement).style.display = "none";
    var courseDetailVariable = (document.getElementById("courseDetails") as HTMLElement).style.display = "block";
}

function viewAvailableCourses()
{
    var availableCourseVariable = (document.getElementById("courseDetails") as HTMLElement).style.display = "none";
    var viewCourseVariable = (document.getElementById("courseDetails") as HTMLElement).style.display = "block";
    alert("Available Online Course Language\n\n1. C sharp - 30 Days\n2. HTML - 20 Days\n3. Python - 10 Days\n4. JavaScript - 5 Days\n5. TypeScript - 1 Day");

}

function enrolledCourses()
{
    var courseDetailVariable = (document.getElementById("courseDetail") as HTMLElement).style.display = "none";
    var enrolledCourseVariable = (document.getElementById("courseDetails") as HTMLElement).style.display = "block";

}


function viewEntrolledLists() {
    var viewlist = document.getElementById('courseDetails') as HTMLElement;
    var cSharpLanguage = 30;
    var htmlLanguage = 20;
    var python = 10;
    var javaScriptLanguage = 5;
    var typeScript = 1;

    viewlist.innerHTML = "<h2>Entrolled User</h2>";
    for (var i = 0; i < enrolledDetailObject.length; i++) {
        viewlist.innerHTML += `courseName: ${enrolledDetailObject[i].courseName} | reqDays: ${enrolledDetailObject[i].reqDays}<br>| enrolledUserID :${enrolledDetailObject[i].enrolledUserID}`;

    }
}



