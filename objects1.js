const tinderUser = new Object() //singleton object
const tinder = {} //non- singelton object
 tinderUser.name = "ashish"
 tinderUser.id = "123abc"
 tinderUser.isLoggedIn = "true"

 console.log(tinderUser);
 //static methods of the Objects
 console.log(Object.keys(tinderUser));  //return keys of the object in the form of array
 console.log(Object.values(tinderUser)); //returns values
console.log(Object.hasOwn(tinderUser, "name")); //returns boolean sxpressions

 //objects in object
 const regularUser = {
    name: "navish",
    fullname: {
        firstname: "nav",
        lastname: "thakur"
    }
 }
//  console.log(regularUser.fullname.firstname);
 //regular user is the main object  here then we add the next key whose value we need 

 //merging of objects
 const obj1 = {
    1 : "a",
    2 : "b"
 }
 const obj2 = { 3 : "c", 4 : "d"}
 const obj4 = {5 : "e", 6 : "f" }
 //const obj3 = {obj1,obj2}
//  const obj3 = Object.assign({}, obj1, obj2, obj4) //assign() is used to merge the two or more objects
  const  obj3 = {...obj1, ...obj2, ...obj4} // used to merge. it is relatively easy
// console.log(obj3);

const users = {
    id: 1,
    email : "acd@gmail.com" 
}
 
//destructuring of a object
const course = {
    coursename : "js",
    price: "999",
    teacher: "abc"
}
console.log(course.teacher); //to prevent from writing this code again and again we use destructuring, which is coded below.

const{teacher} = course //destructuring
console.log(teacher);
