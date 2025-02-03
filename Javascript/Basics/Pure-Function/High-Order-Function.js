
// A function that accepts another function as an argument or return a function or does both is called an HOF;

// function wrapper(){
//   return "Welcome to my function";
// }

// //High Order function
// function greetMessage(wrapper)
// {
//   console.log(wrapper(), "Hi Anjali,");
// }
// greetMessage(wrapper) ;




function displayMessage(){
  return function(){
    console.log("Hello from the Inner Function");

  }
}
const output  = displayMessage();
output();