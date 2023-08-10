let employeeDetails = `{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev" , "DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" :{
        "street" : "32, Laham st.",
        "city" : "Innsbruck",
        "country": "Austria"
    },
    "referred_by" : "E0012" 
}`

console.log(`type of employee Details :- ${typeof employeeDetails}`);
//to convert json to objecct we use json.parse method
console.log(`===================Step 2===================`);
const empdetails = JSON.parse(employeeDetails); 
console.log(`type of employee Details :- ${typeof empdetails}`);
console.log(`===================Step 3===================`);
for (let index = 0; index < empdetails.role.length; index++) {
    
    if(empdetails.role[index] == "Dev")
    {
        console.log(empdetails.role[index]);
    }
    else
    {
        console.log(`No Such details is present`);
    }
    
}
console.log(`===================Step 4===================`);
const arrayName = empdetails.name.split(" ")
for (let index = 0; index < arrayName.length; index++) {
    
    if(arrayName[index] == "Melon")
    {
        console.log(arrayName[index]);
    }
    else
    {
        console.log(`No Such details is present`);
    }
    
}

console.log(`===================Step 5===================`);
const arraydoj = empdetails.doj.split("-")
for (let iCnt = 0; iCnt < arraydoj.length; iCnt++) {
    if(arraydoj[iCnt] == "2019")
    {
        console.log(arraydoj[iCnt]);
    }
    else
    {
        console.log(`No Such details is present`);
    }
    
}