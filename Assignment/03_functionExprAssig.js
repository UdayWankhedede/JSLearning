console.log("=================Ques 1=================");
var square = function(num)
{
   var result = num * num;
   console.log("Square of",num,"is",result);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);
console.log("=======================Ques 2=======================");

var square = function()
{
    console.log("Square is type of ",typeof square);
}
square();
console.log("=======================Ques 3=======================");

var areaRectangle = function(length, breadth)
{
    var area = length * breadth;
    console.log("Area of rectangle length",length,"breadth",breadth,"is :",area);
}
areaRectangle(499,917);

console.log("======================Ques 4=======================");

var swapValue = function(value1, value2)
{
    console.log("before Swap value is :",value1,value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap value is :",value1,value2);
}
swapValue("Mahi","Raina");
swapValue(55,77);

console.log("=======================Ques 5=======================");

var str = "JS the most popular language of internet";

var strFunction = function(str)
{
    console.log(`Toatal character available in the string are ${str.length}`);
    var charAt6 = str.charAt(6);
    console.log(`Character at index 6 is ${charAt6}`);
    var charAt11 = str.charAt(11);
    console.log(`Character at index 11 is ${charAt11}`);

    var lengthOfStr = str.length;
    var charAtLast = str.charAt(lengthOfStr-1);
    console.log(`Character at index ${lengthOfStr} is ${charAtLast}`);

    var charAt0 = str.charAt(0);
    console.log(`First character of string is : ${charAt0}`);

    var lengthOfStr = str.length;
    var charAtThirdLast = str.charAt(lengthOfStr-3);
    console.log(`Third last character of string is ${charAtThirdLast}`);

    var word = str.split(' ');
    var totalWords = word.length;
    console.log(`Total number of words in the string ${totalWords}`);
}
strFunction(str);
