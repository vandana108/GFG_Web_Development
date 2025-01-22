const calculateSum = function(x, y){
  return x + y;
}

const calculateAddition = (x, y)=>{
  return x+y;
}

//  console.log(calculateSum(12, 4));
 
const calculateSumXGreaterY=(a, b) => {
  if(a>b)
  {
    return a+b;
  }
  else{
    return a-b;
  }
}
console.log( "this is result "+calculateSumXGreaterY(120,20));
//Alternative approach using Ternary operator

const addNumber = (x, y) => x>y?x+y:x - y;
const output = addNumber(150, 50);
console.log(output);

