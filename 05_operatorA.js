
function squareOfWordLength(str)
{
    var result = str.length;
    var square = result * result;
    console.log(`Square of ${str} is ${square}`);
}
var str1 = "Java Script";
var str2 = "Google Chrome";
var str3 = "Developer Smart"
squareOfWordLength(str1);
squareOfWordLength(str2);
squareOfWordLength(str3);

var str = "I am Angular Developer";

var strResult = function()
{
    var strLength = str.length;
    //console.log(strLength);
    var word = str.split(' ');
    var noOfWord = word.length;
    //console.log(noOfWord);

    var divResult = strLength / noOfWord;
    console.log(`Aftre dividing the length by total word ${divResult}`);

    var mulResult = strLength * noOfWord;
    console.log(`Aftre multiple the length by total word ${mulResult}`);

}
strResult();