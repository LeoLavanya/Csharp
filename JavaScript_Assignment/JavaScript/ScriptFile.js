function checkName()
{
    var name1 = document.getElementById("name");
    if(name1.value.trim() == "")
    {
        name1.style.border = "solid 2px red";
        document.getElementById("labelName").style.visibility = "visible";
        document.getElementById("labelName").innerHTML = "First Name Required";
        return false;
    }
    else
    {
        return true;
    }
}

function checkFathersName()
{
    var name2 = document.getElementById("fatherName");
    if (name2.value.trim() == "")
    {
        name2.style.border = "solid 2px red";
        document.getElementById("labelFathersName").style.visibility = "visible";
        document.getElementById("labelFathersName").innerHTML = "Last Name Required";
        return false;
    }
    else
    {
        return true;
    }
}

function checkMailId()
{
    var mailIdName = document.getElementById("mailId");
    var regX =/^([\w]+)@([a-z A-Z]+).([a-z]{2,10}).([a-z]{2,10})$/;
    if (regX.test(dob))
    {
        return true;
    }
    else if(mailIdName.value.trim() == "")
    {
        mailIdName.style.border = "solid 2px red";
        document.getElementById("labelMailId").style.visibility = "visible";
        document.getElementById("labelMailId").innerHTML = "Required";
        return false;
    }
    else{
        mailIdName.style.border = "solid 2px red";
        document.getElementById("labelMailId").style.visibility = "visible";
        document.getElementById("labelMailId").innerHTML = "Please Enter a Valid Email Address";
        return false;
    }
}

function checkDateOfBirth()
{
    var dob = document.getElementById("dateOfBirth");
    var regX = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if (regX.test(dob))
    {
        return true;
    }
    else if(dob.value.trim() == "")
    {
        dob.style.border = "solid 2px red";
        document.getElementById("labeldob").style.visibility = "visible";
        document.getElementById("labeldob").innerHTML = "Required";
        return false;
    }
    else{
        dob.style.border = "solid 2px red";
        document.getElementById("labeldob").style.visibility = "visible";
        document.getElementById("labeldob").innerHTML = "Enter Your DOB in mm-dd-yyyy";
        return false;
    }
}

function checkPhNumber()
{
    var phNoValue = document.getElementById("phNumber");
    var regX = /^[6-9][0-9]{9}$/;
    if (regX.test(phNoValue))
    {
        return true;
    }
    else if(phNoValue.value.trim() == "")
    {
        phNoValue.style.border = "solid 2px red";
        document.getElementById("labelPhNo").style.visibility = "visible";
        document.getElementById('labelPhNo').innerHTML = "Required";
        return false;
    }
    else{
        phNoValue.style.border = "solid 2px red";
        document.getElementById("labelPhNo").style.visibility = "visible";
        document.getElementById('labelPhNo').innerHTML = "Enter a valid Phone Number";
        return false;
    }
}

function CurrentAddressLine1()
{
    var address1 = document.getElementsByClassName("currentAddress1");
    if (address1.value.trim() == "")
    {
        address1.style.border = "solid 2px red";
        document.getElementById("labelAddress1").style.visibility = "visible";
        document.getElementById("labelAddress1").innerHTML = nameValue.name + "Required";
        return false;
    }
    else
    {
        return true;
    }
}

function CurrentAddressLine2()
{
    var address2 = document.getElementById("currentAddress2");
    if (address2.value.trim() == "")
    {
        address2.style.border = "solid 2px red";
        document.getElementById("labellabelAddress2").style.visibility = "visible";
        document.getElementById("labellabelAddress2").innerHTML = "Last Name Required";
        return false;
    }
    else
    {
        return true;
    }
}

function checkCity()
{
    var cityValue = document.getElementById("fatherName");
    if (cityValue.value.trim() == "")
    {
        cityValue.style.border = "solid 2px red";
        document.getElementById("labelCity").style.visibility = "visible";
        document.getElementById("labelCity").innerHTML = "Last Name Required";
        return false;
    }
    else
    {
        return true;
    }
}

function checkPinCode()
{
    var pinCodeValue = document.getElementById("currentPinCode").value;
    var regX = /^[0-9 \s]{6-7}$/;

    if (regX.test(pinCodeValue))
    {
        return true;
    }
    else if(pinCodeValue.value.trim() == " ")
    {
        pinCodeValue.style.border = "solid 2px red";
        document.getElementById("labelPin").style.visibility = "visible";
        document.getElementById('labelPin').innerHTML = "Zip code is required";
    }
    else{
        pinCodeValue.style.border = "solid 2px red";
        document.getElementById("labelPin").style.visibility = "visible";
        document.getElementById('labelPin').innerHTML = "Enter a valid Zip code";
    }
}


function checkSameAddressOrNot()
{
    var addressValue = document.getElementsByClassName("addr");
    var newvalue = addressValue.namedItem;
}

function callAllValidation()
{
    checkName();
    checkFathersName();
    checkDateOfBirth();
    checkPhNumber();
    CurrentAddressLine1();
    CurrentAddressLine2();
    checkCity();
    checkPinCode();
    checkMailId();
}