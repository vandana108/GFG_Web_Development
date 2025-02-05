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



//block scope
{
  var a = 10 ;
  var b = 20 ;
 }
 
 console.log(a);
 console.log(b);