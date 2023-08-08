let bankSBI = {
  bankName: "SBI",
  branch: "Arvi",
  branchCode: 101,
  state: "Maharashtra",
};

let bankLocation = {
  street: "wardha road",
  city: "Arvi",
  pincode: 442201,
};

console.log(
  "================================================Using Object.assign================================================"
);

let sbiClone = Object.assign({}, bankSBI);
console.log(
  `Bank Name is ${sbiClone.bankName} located at ${sbiClone.branch} state ${sbiClone.state} having branch code ${sbiClone.branchCode}`
);
let locationClone = Object.assign({}, bankLocation);
console.log(
  `Bank SBI is located near ${locationClone.street} at ${locationClone.city} taluka having pin code ${locationClone.pincode}`
);

console.log(
  "================================================Using Spread================================================"
);
let cloneSBIBank = bankSBI;
console.log(
  `Bank Name is ${sbiClone.bankName} located at ${sbiClone.branch} state ${sbiClone.state} having branch code ${sbiClone.branchCode}`
);
//console.log(cloneSBIBank);
let cloneLocation = bankLocation;
//console.log(cloneLocation);
console.log(
  `Bank SBI is located near ${locationClone.street} at ${locationClone.city} taluka having pin code ${locationClone.pincode}`
);

let rateOfInterest = {
  homeLoadInterest: 5,
  personalLoadInterest: 15,
  dueLoadInterest: 5,
};
let sbiDetails = Object.assign({}, bankSBI, bankLocation, rateOfInterest);
console.log(
  `Bank Name is ${sbiClone.bankName} located at ${sbiClone.branch} state ${sbiClone.state} having branch code ${sbiClone.branchCode} Bank SBI is located near ${locationClone.street} at ${locationClone.city} taluka having pin code ${locationClone.pincode}\nhaving rate of interest \nHome Loan :${sbiDetails.homeLoadInterest}\nDue Loan :${sbiDetails.dueLoadInterest}\nPersonal Loan :${sbiDetails.personalLoadInterest}`
);

console.log(
  "================================================Using For of Loop================================================"
);

for (const value in sbiDetails) {
  console.log(`${value} : ${sbiDetails[value]}`);
}
