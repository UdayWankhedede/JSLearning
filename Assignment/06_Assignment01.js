function number ()
{
    for(i = 5; i <= 15; i++)
    {
        console.log(i);
    }
}
number();
console.log('---------------------------------');
function decNumber()
{
    for(i = 50; i >= 40; i--)
    {
        console.log(
            i
        );
    }
}
decNumber();


console.log('---------------------------------');

function oddNumber()
{
    for(i = 1; i <= 30; i++)
    {
        if(i % 2 != 0)
        {
            console.log(i);
        }
    }
}

oddNumber();

console.log('---------------------------------');

function evenNumber()
{
    for(i = 1; i <= 20; i++)
    {
        if(i % 2 == 0)
        {
            console.log(i);
        }
    }
}

evenNumber();

console.log('---------------------------------');

function printTable(value)
{
    for(i = 1; i <=10; i++)
    {
        iMult = i*value;
        console.log(`${i} * ${value} = ${iMult}`);
    }
}

printTable(5);
console.log('---------------------------------');
printTable(10);

console.log('---------------------------------');

function printTableReverse(value)
{
    for(i = 10; i>0; i--)
    {
        iMult = i*value;
        console.log(`${i} * ${value} = ${iMult}`);
    }
}
printTableReverse(10);

