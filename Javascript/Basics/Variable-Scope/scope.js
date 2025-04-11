// Global and Local variable 
//Global, local and Block scope

//Global variable
let x =10;
function myFunction(){
  console.log(`This is the value of x = ${x}`);
}

//Local variable
function localScope()
{
  let y = 20;
  console.log(`This is the value of y = ${y}`);
}




//var is global scope which we can access
// variables declared with keyword var are either global scope or function Scoped.
{
  var a = 10 ;
  var b = 20 ;
 }
 
 console.log(a);
 console.log(b);



 //local scope: let and const are local scope here because it will not be accessible outside the block and give an error
 //Block Scope  - visibility only inside a piece of code generally wrapped by curly braces 
// let and const declared variables are Block Scope
//  {
//   let c=20;
//   const d=10;
//  }
//  console.log(c);
//  console.log(d);