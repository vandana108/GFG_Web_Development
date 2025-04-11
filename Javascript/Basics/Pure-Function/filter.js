// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function filterNumber(arr){
//   const tempArr = [];
//   for(let number of arr){
//     if(number > 5){
//       tempArr.push(number);
//     }
//   }
//   return tempArr;
// }

// const output = filterNumber(arr);
// console.log(output);


//reduce() method
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const reduceFun = (acc, cur) => acc+cur;
// const answer = arr.reduce(reduceFun, 10);
// console.log(answer);


//argument method
// let a =100;
// function calculateTotal(a=34){
//   console.log(a);
//   // console.log(arguments);
 

  
// }
// calculateTotal(90);


//Arguement Object

// In case of default Parameter

// Here in line 2 when the value of a is 4 as this was the argument passed to the hello function when it was called so the default value of a is changed to 4 from 10. 
// Now when argument object value at zero index was changed to 9 .Will it going to change the value of a as well? 
// No. Changing the argument object won't change the value of 'a'. The value of 'a' will be the initial value that was passed through the first call of the hello(4) method.
// function hello(a = 10){
//   console.log(a); // line2 
//   console.log(arguments); //line3
//   arguments[0] = 9;   // line4
//   console.log(arguments);   //line5
//   console.log(a);  //line6
//  }
 
//  hello(4);

//Rest Parameter: So basically rest parameter collects all the remaining arguments and forms an array containing all of them as the name suggests rest parameter.
// The most important Point to remember about the rest parameter is that it should always be used as the last parameter of the function otherwise there will be a syntax error.
// The rest parameter is valuable when you are unsure about the number of arguments a function will have. It collects all these arguments into an array, allowing you to perform various manipulations to achieve the desired results using that array.

function greetMessage(a, b, ... rest){
  console.log(a);
  console.log(b);
  console.log(rest);
}

greetMessage('Hi', "Hello", "Good Morning", "Good Evening", "Namaste" );
