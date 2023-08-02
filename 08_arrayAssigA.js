const arrayFruits = ["Bannana","Orange","Mango","Water Melon"];
console.log("-------------------------------Ques 1-------------------------------");
console.log(`The First element of the array is : ${arrayFruits[0]}`);

console.log(`The First element of the array is : ${arrayFruits[3]}`);

console.log("-------------------------------Ques 2-------------------------------");
arrayFruits.unshift("Papaya");
console.log(arrayFruits);

console.log("-------------------------------Ques 3-------------------------------");
console.log(`before :${arrayFruits}`);
arrayFruits.splice(3,1);
console.log(`after :${arrayFruits}`);

console.log("-------------------------------Ques 4-------------------------------");
console.log(`before :${arrayFruits}`);
arrayFruits.push("Pineapple");
console.log(`After :${arrayFruits}`);

console.log("-------------------------------Ques 5-------------------------------");
console.log(`before :${arrayFruits}`);
arrayFruits.splice(2,0,"Drangon Fruits");
console.log(`before :${arrayFruits}`);

console.log("-------------------------------Ques 6-------------------------------");
console.log(`before :${arrayFruits}`);
arrayFruits.splice(3,1,"Kiwi")
console.log(`before :${arrayFruits}`);

console.log("-------------------------------Ques 7-------------------------------");
console.log(`before :${arrayFruits}`);
console.log(`before :${arrayFruits.slice(1,4)}`);

console.log("-------------------------------Ques 8-------------------------------");

console.log(arrayFruits.slice(arrayFruits.length-3,arrayFruits.length));