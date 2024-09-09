//creation of objects using different types

// 1. Object Literals
const objectLiteral = {
    name : "navish", age: 22, gender: "male", isLoggedIn: true }
    // console.log(objectLiteral.age);

//2. using New keyboard
const newObject = new Object();
    //here we asigned the values in the empty object.
newObject.name = "Rahul";
newObject.age = 23;
newObject.isLoggedIn = false;
// console.log(newObject.age);

//3. by using empty{}
const empty = {}
empty.fname = "ashish";
empty.lname = "thakur";
empty.age = 24;
delete empty.age; //delete keyword delete the property. 
function fullname(){
    return `${empty.fname} ${empty.lname} is full name of the user`
}
 //console.log(fullname()); //prints full name

//Accessing Object Properties
// 1. objectName.propertyname
// 2. objectName["propertyName"]


//nested objects
 const myObj = {
    name : "a",
    age : 25,
    cars : {
         name: "audi", model: ["a8","b3","a5"],
    jets : {
        name : "airbus" , modal : {
            m1 : "a380",
            m2 : "a320",
            m3 : "a450"
        } 
    }   
    }
 }
 console.log(myObj.cars.jets.modal.m1); //prints - a380

 //object nethods
 // 1. to create an array from the property values
 const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  console.log(Object.values(person));  //Object.values() returns object values to the array

// 2. Object.enteries() makes it simple to use in loops
// 3. JSON.stringfy() -- used to convert object to string using JSON method.
let JSONmethod = JSON.stringify(person);
console.log(JSONmethod);

//Object Constructor functions

//--to create many objects of same type
//"this" keyword has no specific value and the value of this become new object when new iobject is created & it works
in the current context.
  
function persons(name, age) {
    this.firstname = name;
    this.lastname = age;
}
const mybro = new persons("ayush", "thakur");

console.log(`the name of the person is ${mybro.firstname} ${mybro.lastname}`);
