// object person
let person = {
    talk: true,
    Canfly() {
        return "Sorry, Can't fly";
    },
};
// Object GFGuser
let GFGuser = {
    CanCode: true,
    CanCook() {
        return "Can't say";
    },
    
  //  Inheriting the properties and methods of person
   // GFGuser.__proto__: person, 
};
GFGuser.__proto__= person;
// Printing on console
// Property of person
console.log("Can a GFG User talk: " + GFGuser.talk); 

// Method of person
console.log("Can a GFG User fly: " + GFGuser.Canfly()); 

// Property of GFGuser
console.log("Can a GFG User code: " + GFGuser.CanCode); 

// Method of GFGuser
console.log("Can a GFG User cook: " + GFGuser.CanCook()); 

let Parent = {
    surName : "Wankhede",
    talk()
    {
        return "Marathi";
    }
};

let Child = 
{
    childName : "Uday",
    Childtalk()
    {
        return "English";
    }
};
 //  Inheriting the properties and methods of parent
Child.__proto__ = Parent;

console.log(Child.talk());
console.log(Child.surName);