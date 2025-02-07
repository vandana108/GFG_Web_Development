//Rest Parameter

function calculateTotal(a, b, ...rest){//rest keyword is used to access the rest of the arguments
  console.log("about calculate function")
  console.log(a, b);
  console.log(rest);
}

calculateTotal(1, 2, 3, 4, 5); // Output:


function num(x, y,v, ...args){
  console.log("About num function");
  console.log(x, y);// only two arguements are passed so will get two elements only
  console.log(args);
}
num(1, 2, 3,4,5,6,7,8,9);