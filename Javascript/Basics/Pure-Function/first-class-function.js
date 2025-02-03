// First Class Function

// A programming language is said to have first-class function if function in that language are treated like other variable
// So the function can be assigned to any other variable or passed as an argument or can be returned by another function.
// * -- Source: GFG article

// function wrapper(){
//   return "Welcome to GFG";
// }

// function greetMessage(inner, name){
//   console.log(name, inner());
// }

// greetMessage(wrapper, "Prakash");




function greetMessage(){
  function wrapper(){
    let name = "Prakash";
    console.log(name, "Welcome to GFG!!!");
  }
  return wrapper;
}
const output = greetMessage();
output();
greetMessage()();
// console.log(greetMessage());
