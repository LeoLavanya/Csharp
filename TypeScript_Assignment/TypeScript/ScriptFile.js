"use strict";
exports.__esModule = true;
var autoIncrementUserId = 1000;
var autoIncrementCourseId = 100;
var UserDetails = /** @class */ (function () {
    function UserDetails(newUserName, newUserAge, newUserMobileNumber) {
        autoIncrementUserId++;
        this.userId = "OC" + autoIncrementUserId;
        this.name = newUserName;
        this.age = newUserAge;
        this.mobileNumber = newUserMobileNumber;
    }
    return UserDetails;
}());
var userDetailObject = new Array();
userDetailObject.push(new UserDetails("leo", 23, 6385709104));
userDetailObject.push(new UserDetails("lavanya", 20, 7418529614));
var enrolledCourse = /** @class */ (function () {
    function enrolledCourse(newCourseName, newCourseReqDays, newUserEnrolledUserID) {
        autoIncrementCourseId++;
        this.courseId = autoIncrementCourseId;
        this.courseName = newCourseName;
        this.reqDays = newCourseReqDays;
        this.enrolledUserID = newUserEnrolledUserID;
    }
    return enrolledCourse;
}());
var enrolledDetailObject = new Array();
enrolledDetailObject.push(new enrolledCourse("Java", 10, "OC1001"));
enrolledDetailObject.push(new enrolledCourse("C", 11, "OC1002"));
function registrationProcess() {
    var homePageVariable = document.getElementById("homePage").style.display = "none";
    var registrationPageVariable = document.getElementById("registrationProcess").style.display = "block";
}
function registrationStep() {
    var readNewUserName = document.getElementById('newUserName').value;
    var readNewUserAge = document.getElementById('newUserAge').value;
    var readNewUserPhoneNumber = document.getElementById('newUserMobileNumber').value;
    userDetailObject.push(new UserDetails(readNewUserName, 23, 1231231));
    // let readNewUserName = (document.getElementById('newUserName') as HTMLInputElement).value;
    // let readNewUserAge = (document.getElementById('newUserAge') as HTMLInputElement).value;
    // let readNewUserPhoneNumber = (document.getElementById('newUserMobileNumber') as HTMLInputElement).value;
    // userDetailObject.push(new UserDetails(readNewUserName, +readNewUserAge, +readNewUserPhoneNumber));
    // alert("Your Registration Process is Done Successfully")
}
function loginProcess() {
    var homePageVariable = document.getElementById("homePage").style.display = "none";
    var loginPageVariable = document.getElementById("loginProcess").style.display = "block";
}
function courseDetails() {
    var loginPageVariable = document.getElementById("loginProcess").style.display = "none";
    // var homePageVariable = (document.getElementById("homePage") as HTMLElement).style.display = "none";
    var courseDetailVariable = document.getElementById("courseDetails").style.display = "block";
}
function viewAvailableCourses() {
    var availableCourseVariable = document.getElementById("courseDetails").style.display = "none";
    var viewCourseVariable = document.getElementById("courseDetails").style.display = "block";
    alert("Available Online Course Language\n\n1. C sharp - 30 Days\n2. HTML - 20 Days\n3. Python - 10 Days\n4. JavaScript - 5 Days\n5. TypeScript - 1 Day");
}
function enrolledCourses() {
    var courseDetailVariable = document.getElementById("courseDetail").style.display = "none";
    var enrolledCourseVariable = document.getElementById("courseDetails").style.display = "block";
}
function viewEntrolledLists() {
    var viewlist = document.getElementById('courseDetails');
    var cSharpLanguage = 30;
    var htmlLanguage = 20;
    var python = 10;
    var javaScriptLanguage = 5;
    var typeScript = 1;
    viewlist.innerHTML = "<h2>Entrolled User</h2>";
    for (var i = 0; i < enrolledDetailObject.length; i++) {
        viewlist.innerHTML += "courseName: ".concat(enrolledDetailObject[i].courseName, " | reqDays: ").concat(enrolledDetailObject[i].reqDays, "<br>| enrolledUserID :").concat(enrolledDetailObject[i].enrolledUserID);
    }
}
