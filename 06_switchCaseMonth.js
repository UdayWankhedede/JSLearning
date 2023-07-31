function monthOfYear( num )
{
    switch (num) {
        case 1:
         console.log(`Month: January`);
         break;
        case 2:
            console.log(`Month: February`);
         break;
        case 3:
            console.log(`Month: March`);
         break;
        case 4:
            console.log(`Month: April`);
         break;
        case 5:
            console.log(`Month: May`);
         break;
        case 6:
            console.log(`Month: June`);;
         break;
        case 7:
            console.log(`Month: July`);
         break;
        case 8:
            console.log(`Month: August`);
         break;
        case 9:
            console.log(`Month: September`);
         break;
        case 10:
            console.log(`Month: Octomber`);;
         break;
        case 11:
            console.log(`Month: November`);
         break;
        case 12:
            console.log("Month: December");
         break;
        default:
         console.log("Invalid input - Wrong month number.");
         break;
       }
};

monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);