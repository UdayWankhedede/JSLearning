// let sbiBank={
//     bankName:"SBI",
//     location :"Pune",
//     accountNo:147258369,
//     ifsc:"sbi963852741",
//     interestRate:8.59,
//     showdetails:function(){
//        console.log(`SBI : ${sbiBank.bankName},${sbiBank.location},${sbiBank.accountNo},${sbiBank.ifsc},${sbiBank.interestRate}`);
//        }
//    }

// let axisBank={
//    bankName:"AXIS BANK",
//    location :"Mumbai",
//    accountNo:159357456,
//    ifsc:"axis789456123",
//    interestRate:9.23,
//    showdetails:function(){
//        console.log(`AXIS : ${axisBank.bankName},${axisBank.location},${axisBank.accountNo},${axisBank.ifsc},${axisBank.interestRate}`);
//     }
// }

// let hdfcBank={
//    bankName:"HDFC",
//    location :"Nagpur",
//    accountNo:963852741,
//    ifsc:"hdfc48621793",
//    interestRate:9.89,
//    showdetails:function(){
//        console.log(`HDFC : ${hdfcBank.bankName},${hdfcBank.location},${hdfcBank.accountNo},${hdfcBank.ifsc},${hdfcBank.interestRate}`);
//     }
// }

// let yesBank={
//    bankName:"YES BANK",
//    location :"Kolkata",
//    accountNo:763985214,
//    ifsc:"yes123456987",
//    interestRate:9.54,
//    showdetails:function(){
//        console.log(`YES : ${yesBank.bankName},${yesBank.location},${yesBank.accountNo},${yesBank.ifsc},${yesBank.interestRate}`);
//     }
   
// }
// console.log(`------------------SBI BANK--------------------`);
// sbiBank.showdetails();
// console.log(`------------------AXIS BANK--------------------`);
// axisBank.showdetails();
// console.log(`------------------HDFC BANK--------------------`);
// hdfcBank.showdetails();
// console.log(`------------------YES BANK--------------------`);
// yesBank.showdetails();

let sbiBank = 
{
    bankName:"SBI",
         location :"Arvi",
         accountNo:1351335,
         ifsc:"sbi1351335",
         interestRate:7.8,

         showdetails:function(){
            console.log(`SBI \n Bank Name :${sbiBank.bankName},\n Location :${sbiBank.location},\n Account No:${sbiBank.accountNo},\n IFSC Code${sbiBank.ifsc},\n Interest Rate${sbiBank.interestRate}`);     }
}
let axisBank = {
    bankName:"AXIS Bank",
         location :"Nagpur",
         accountNo:23542024,
         ifsc:"axis23542024",
         interestRate:8.8,
         showdetails:function(){
            console.log(`AXIS \n Bank Name :${yesBank.bankName},\n Location :${yesBank.location},\n Account No:${yesBank.accountNo},\n IFSC Code${yesBank.ifsc},\n Interest Rate${yesBank.interestRate}`);  }
}
let hdfcBank =
{
    bankName:"HDFC",
    location :"Wardha",
    accountNo:2154215,
    ifsc:"hdfc2154215",
    interestRate:8.5,

    showdetails:function(){
        console.log(`HDFC \n Bank Name :${hdfcBank.bankName},\n Location :${hdfcBank.location},\n Account No:${hdfcBank.accountNo},\n IFSC Code${hdfcBank.ifsc},\n Interest Rate${hdfcBank.interestRate}`); }
}
let yesBank = {

    bankName:"YES BANK",
    location :"Mumbai",
    accountNo:12489768,
    ifsc:"yes12489768",
    interestRate:6.9,

    showdetails:function(){
        console.log(`YES BANK \n Bank Name :${yesBank.bankName},\n Location :${yesBank.location},\n Account No:${yesBank.accountNo},\n IFSC Code${yesBank.ifsc},\n Interest Rate${yesBank.interestRate}`);
         }

}

console.log(`--------------------------------------`);
sbiBank.showdetails();
console.log(`--------------------------------------`);
axisBank.showdetails();
console.log(`--------------------------------------`);
hdfcBank.showdetails();
console.log(`--------------------------------------`);
yesBank.showdetails();

