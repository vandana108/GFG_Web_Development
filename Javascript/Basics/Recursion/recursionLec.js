//using simple for loop in function
// function calculate(x){
//   let total =0;
//   for(let i = 1; i<=x; i++){
//     total = total+i;
//   }
//   return total;

// }
// const result = calculate(5);
// console.log(`This is the result = ${result} `)

// using recursion

function calculateRec(num){
  if(num === 1){
    return 1;
  }
 return num+calculateRec(num-1);
  // return num;
}
const result = calculateRec(5);
console.log(`This is the result = ${result} `);


// Factorial code

function factorialRec(number){
  if(number ===1){
    return number;
  }return number*factorialRec(number-1);

}

const answer = factorialRec(5);
console.log(`This is Factorial of &{number} = `+ answer);