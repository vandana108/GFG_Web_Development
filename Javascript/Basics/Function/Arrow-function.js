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

// const addNumber = (x, y) => x>y?x+y:x - y;
// const output = addNumber(150, 50);
// console.log(output);

//Exercise

function calculateSumOfNumber(min, max){
  let total =0;
  for(let i=min; i<=max; i++){
    total= total+i;
}
// console.log(total);
return total;
}

var result = calculateSumOfNumber(1, 10);
console.log("This is the result of sum of numbers= "+result);
