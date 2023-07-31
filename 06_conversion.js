console.log(`-------------------------------------------------------------first Assignment-------------------------------------------------------------`);

var result;

result = '3'+2;
console.log(`When a number 2 is added to a string '3', JavaScript converts the number to a string before concatenation and result  we get : ${result}`); 

result = '3'+true;

console.log(`when we add any boolean value with string it get converted into string and result we get : ${result}`); 

result ='3'+undefined;
console.log(`when we add any boolean value with string it get converted into string and result we get : ${result}`); 

result = '3'+null;
console.log(`when we add any null value with string it get converted into string and result we get : ${result}`); 

console.log(typeof(null)); // null is object

console.log(`-------------------------------------------------------------boolean conversion-------------------------------------------------------------`);
result = '4'- true;
console.log(`when we substract any boolean value with string it get converted into number false = 0, true = 1 and result we get : ${result}`);

result = 4 + true;
console.log(`when we add any boolean value with number it get converted into number false = 0, true = 1 and result we get : ${result}`);

result = 4 + false; 
console.log(`when we add any boolean value with string it get converted into number false = 0, true = 1 and result we get : ${result}`);

console.log(`-------------------------------------------------------------String conversion-------------------------------------------------------------`);

result = '4'-'2';
console.log(`when we substract any string value with string the string value get converted into number if string value is number and result we get : ${result}`);

result = '4'-2;
console.log(`when we substract any string value with number the string value get converted into number if string value is number and result we get : ${result}`);

result = '4'*2;
console.log(`when we multiple any string value with number the string value get converted into number if string value is number and result we get : ${result}`);

result ='4'/2;
console.log(`when we divide any string value with number the string value get converted into number if string value is number and result we get : ${result}`);



console.log(`-------------------------------------------------------------second Assignment-------------------------------------------------------------`);

//here we create a var name as result
result = 0 ==` `;
console.log(`as we in string space is also has index so space get converted into number i.e charAt(0) and we get result : ${result}`);

result = 0 == `0`;
console.log(`String get converted into number i.e 0 and we get result : ${result}`);

result = 0==false;
console.log(`boolean value get converted into true = 1 and false = 0 and we get result : ${result}`);

result = null == undefined;
console.log(result);

result = 1 == [1];
console.log(`both the arguments are number so we get result : ${result}`);

result = 1==true;
console.log(`boolean value get converted into true = 1 and false = 0 and we get result : ${result}`);

result = 1 ==`1`;
console.log(`String get converted into number i.e 1 and we get result : ${result}`);

