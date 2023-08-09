let getFactorial=function(number) {

    let factorial=1;
    for (let iCnt = 1; iCnt <= number; iCnt++) 
    {
       factorial=factorial*iCnt;
    }
    console.log(`factorial of ${number} is : ${factorial}`);

}
getFactorial(10);
getFactorial(3);
getFactorial(4);
getFactorial(6);