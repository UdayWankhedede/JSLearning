let personalDetails = {
  pname: "Uday",
  place: "Arvi",
  gender: "Male",
};
let collegeDetails = {
  collegeName: "GH Raisoni",
  city: "Amravati",
  branch: "Civil Engineering",
};

let mergedObjects = Object.assign({}, personalDetails, collegeDetails);
console.log(
  `My Name is : ${mergedObjects.pname} i am from ${mergedObjects.place} and i am ${mergedObjects.gender}, My College Name is ${mergedObjects.collegeName} present at ${mergedObjects.city} and passout from ${mergedObjects.branch} department`
);

const friendArray = ["Uday", "Piyush", "Aditi", "Adesh", "Ashu"];
Object.freeze(friendArray);

for (let value of friendArray) {
  console.log(value);
}

let string = "Codemind Technology";
let newstring = string.substring(9);
let newstring1 = string.substring(0, 9); // for final string concatination
let reverseString = "";
for (let index = newstring.length - 1; index >= 0; index--) {
  const element = newstring.charAt(index);
  reverseString = reverseString.concat(element);
}
let fstring = newstring1.concat(reverseString);
console.log(fstring);
