var leapYear = function checkLeapYear(year) {

        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            console.log(year + ' is a leap year');
        } else {
            console.log(year + ' is not a leap year');
        }
    }

    leapYear(2020);
    leapYear(1999);
    leapYear(1600);
    leapYear(2022);
    leapYear(1945);
    leapYear(null);
    leapYear("Twenty Twenty");
    leapYear(undefined);
    leapYear(NaN);
    leapYear(1750);

