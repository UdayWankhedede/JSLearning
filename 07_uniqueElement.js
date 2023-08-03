let array = [4,5,4,5,8,5,7,8,9,7,8];
var length = array.length;
var newArray = [];
var count = 0;
var present = false;
for(i = 0; i < length; i++)
{
    for(j = 0; j<newArray.length; j++)
    {
        if(array[i]==newArray[j])
        {
            present = true;
        }
    }
    count++;
    if(count == 1 && present == false)
    {
        newArray.push(array[i])
    }
    start = false;
    count = 0;
}
console.log(newArray);