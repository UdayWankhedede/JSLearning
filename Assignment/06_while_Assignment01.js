var i =1;
function number()
{
    while(i <= 15)
    {
        console.log(i);
        i++;
    }
}
number();

console.log('---------------------------------');
function decNumber()
{
    var i = 50;
    while(i >= 40)
    {
        console.log(i);
        i--;
    }
}
decNumber();

console.log('---------------------------------');

function oddNumber()
{
    var i = 1;
    while(i <= 30)
    {
        if(i % 2 != 0)
        {
        console.log(i);
        }

        i++;
    }
}
oddNumber();


console.log('---------------------------------');

function evenNumber()
{
    var i =1;
    while(i <= 20)
    {
        if(i % 2 == 0)
        {
            console.log(i);
        }
        i++;
    }
}

evenNumber();


console.log('---------------------------------');

function printTable(value)
{
    var i =1;
    // for(i = 1; i <=10; i++)
    // {
    //     iMult = i*value;
    //     console.log(`${i} * ${value} = ${iMult}`);
    // }
    while(i <= 10)
    {
        iMult = i*value;
        console.log(`${i} * ${value} = ${iMult}`);
        i++;
    }

}

printTable(5);
console.log('---------------------------------');
printTable(10);

console.log('---------------------------------');


function printTableReverse(value)
{
    var i = 10;
    while(i >0 )
    {
        iMult = i*value;
        console.log(`${i} * ${value} = ${iMult}`);
        i--;
    }
}
printTableReverse(10);


