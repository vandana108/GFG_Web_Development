//2: A function that can return another function
//OR
// IT can do both of them



// function y(){
//   callBackFunc(); //calling a function
//   console.log('from func y!');

// }

// //callback func

// function x(name){
//   console.log(`he, ${name} from funcion x! `);

// }
// y(x, 'Sakshi');


//2:Anonymous Function: which don't have any function name
// 3::function Expression: 
// const anonymousFunc = function(){
//   console.log('wasssup, world!');
// }
// console.log(anonymousFunc); //calling the function
// anonymousFunc();


// 4: Arrow function OR Fat arrow function

// const displayMessage = () => {
//   console.log('Hello, world! from Arrow function');
// }
// displayMessage()

// function showMessage(y,z){
//   return y+z;
// }
// // const displayMessage = (y,z) => y+z
// const displayMessage = (y,z) => {
//   console.log('Hello, world! from Arrow function');
// }
// const value = displayMessage(5,6);
// console.log(value)


// const y = (wrapper, name) => {
//   wrapper(name);//calling a function
//   console.log('from func y!');
//   const innerFunc = () => {
//     console.log('inner function called');

//   }
//   return innerFunc;
// }

// //callback function

// const x = (name) => {
//   console.log(`hi, ${name} from function x! `);
// }

// //named function expresion
// const  outerFunc = y(x, 'Sakshi');
// outerFunc(); //calling the function

function y(){
  console.log('Hii from Y');
}

function x(){
  console.log('Hii from X');
}
y(x); //Hii from Y
x(y); // Hii from X