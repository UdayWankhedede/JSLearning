// ==========================Step 1==========================
var greaterNumber = function(num1 ,num2)
{
    var result = (num1 > num2)?num1:num2
    console.log(`greater number between ${num1} and ${num2} is ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

// ==========================Step 2==========================
var evenOdd = function(num)
{
    var result = (num % 2 == 0) ? "even":"Odd";
    console.log(`Number ${num} is ${result}`);
}
evenOdd(29);
evenOdd(44);
evenOdd(0);
evenOdd(101);

// ==========================Step 3==========================

var wordEvenOrOdd = function(str)
{
    var lengthStr = str.length;

    var result = (lengthStr%2 == 0)? "even":"odd";
    console.log(`String ${str} is ${result}`);
}

wordEvenOrOdd(`JavaScript`);
wordEvenOrOdd("Developer");
wordEvenOrOdd("Google");