function checkPrime(Num)
{
    
    for (let iCnt = 2; iCnt < Num; iCnt++) {
        
        if(Num % iCnt == 0)
        {
            return false;
            break;
        }
        else
        {
            return true;
        }
        
    }
}

var result = checkPrime(50);
if(result == true)
{
    console.log(`is prime number`);
}
else
{
    console.log(`not prime number`);
}