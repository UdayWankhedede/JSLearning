const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`${arrayNumber}`);
console.log("-------------------------------Ques 1-------------------------------");
console.log(`Total length of array is : ${arrayNumber.length}`);
console.log("-------------------------------Ques 2-------------------------------");
console.log(`First element of array is : ${arrayNumber[0]}`);
console.log(`Last element of array is : ${arrayNumber[arrayNumber.length - 1]}`);
console.log("-------------------------------Ques 3-------------------------------");
console.log(`Third last element of array : ${arrayNumber[arrayNumber.length - 3]}`
);
console.log("-------------------------------Ques 4-------------------------------");
console.log("Even number are :");
for (i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 == 0) {
        console.log(arrayNumber[i]);
    }
}
console.log("-------------------------------Ques 5-------------------------------");
console.log("Odd Number are :");
for (i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 != 0) {
        console.log(arrayNumber[i]);
    }
}
console.log("-------------------------------Ques 6-------------------------------");
var iSum = 0;
console.log(`Sum of all even positioned element is : ${iSum}`);
for (i = 0; i < arrayNumber.length; i++) {
    if (i % 2 == 0) {
        //     console.log(i);
        //     console.log(arrayNumber[i]);
        iSum = arrayNumber[i] + iSum;
    }
}
console.log("-------------------------------Ques 7-------------------------------");
console.log(`Sum of all odd positioned element is : ${iSum}`);
var iSum = 0;
for (i = 0; i < arrayNumber.length; i++) {
    if (i % 2 != 0) {
        //     console.log(i);
        //     console.log(arrayNumber[i]);
        iSum = arrayNumber[i] + iSum;
    }
}
console.log("-------------------------------Ques 8-------------------------------");

var iSum = 0;
for (i = 0; i < arrayNumber.length; i++) {
    iSum = arrayNumber[i] + iSum;
}
console.log(`Sum of all element is : ${iSum}`);

console.log("-------------------------------Ques 9-------------------------------");
console.log("Number divisible by 5");
for (i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 5 == 0) {
        console.log(arrayNumber[i]);
    }
}
function checkValue(value, arr) {
    var status = 'Not exist';

    for (var i = 0; i < arr.length; i++) {
        var name = arr[i];
        if (name == value) {
            status = 'Exist';
            break;
        }
    }

    return status;
}

console.log("-------------------------------Ques 10-------------------------------");
console.log('status : ' + checkValue(115, arrayNumber));
console.log("-------------------------------Ques 11-------------------------------");
console.log('status : ' + checkValue(23, arrayNumber));

console.log("-------------------------------Ques 12-------------------------------");

console.log(`before :${arrayNumber}`);
arrayNumber.splice(3, 0, 56, 66);
console.log(`after :${arrayNumber}`);

console.log("-------------------------------Ques 13-------------------------------");
console.log(`before :${arrayNumber}`);
arrayNumber.splice(4, 3);
console.log(`after :${arrayNumber}`);