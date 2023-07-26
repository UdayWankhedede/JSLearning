function display()
{
    console.log("Jay Ganesh");
}
display();
function displayName()
{
    console.log("my name is Uday");
}
displayName();

// -------------------------------------------------------------------

var firstName = "Uday";
var lastName = "Wankhede";
var collegeName = "GH Raisoni";

function personalDetails(firstName, lastName,collegeName)
{
    console.log(firstName, "|",lastName, "|",collegeName);
}
personalDetails(firstName,lastName,collegeName);

// -------------------------------------------------------------------
var arg1 = 1000;
var arg2 = 2000;
function swapValues(arg1,arg2)
{
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("Aftre 1000 swap-",arg1);
    console.log("Aftre 2000 swap-",arg2);
}
swapValues(arg1, arg2);
var name1 = "Virat";
var name2 = "Anushka";
function swapValues(name1,name2)
{
    var temp = name1;
    name1 = name2;
    name2 = temp;
    console.log("Aftre Virat swap-",name1);
    console.log("Aftre Anushka swap-",name2);
}
swapValues(name1, name2);

//--------------------------------------------------------------
var No1 = 10.23;
var No2 = 600;
var No3 = 40;
var total;
function addThreeValues(No1,No2,No3) 
{
   total =  No1+No2+No3;
   return total;
}
total = addThreeValues(No1,No2,No3);
console.log("Addition is :",total);

var value1 = "Hello";
var value2 = "Good";
var value3 = "Morning";

total = addThreeValues(value1,value2,value3);
console.log(total);


function bankDetails(bankName, accountNum, location,pincode)
{
    console.log("| Bank Name -",bankName+"| account Number -"+accountNum," | Location -"+location+"| PinCode -"+pincode,"|");
}
bankDetails("CITI Bank", 3456782345,'Pune',431202);
bankDetails("Axis Bank", 7856782345,'Mumbai',441202);
bankDetails("HDFC Bank", 3456782345,'Pune',631202,"Open");