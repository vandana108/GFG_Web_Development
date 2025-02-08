// function: 
// DRY: Do not Repeat Yourself
// function showWelcomeMessage(name, courseEnrolled){
//   console.log(`Welcome , ${name} to ${courseEnrolled} course!`);
// }


//function with a return statement
// function showWelcomeMessage(name, courseEnrolled){
//   const message = `Welcome , ${name} to ${courseEnrolled} course!`;
//   return message;
// }
// const receivedMessage = showWelcomeMessage('ved', 'javascript', 5)
// console.log(receivedMessage);


// 1: Function are called as 1st class citizens
//          WHY?



// let a= 3;
// console.log(a);

// {
//   console.log(a);
//   let a= 9;
// }
// console.log(a)

//about let variable is also hoisted but is go in the temporal dead zone
// TDZ: time between the variable declaration and the value assignment

// console.log(m);
// let m = 25;

// function calculate()
// {
//   let x =9;//local variable
//   console.log(x);
// }
// console.log(x)
// calculate()


// var x =10;
// //global variable and local variable


// function calculate(){
  
//   console.log(x);
//   var x =8;//local variable o/p: undefined


// }
// calculate();
// console.log(x);





//in case of var variable is hoisted but is not in TDZ
let x =10;
//global variable and local variable


function calculate(){
  
  console.log(x);
  let x =8;//local variable o/p: error will be : hoisted concept


}
calculate();
console.log(x);

