// conditional statement

const readlineSync = require("readline-sync");
const number = Number(readlineSync.question('Enter a number'));
const remainderAfterDivisionByThree = number%3;
const remainderAfterDivisionByFive =  number%5;

if(remainderAfterDivisionByThree===0){
  console.log("Divided by three = ");
}

else{
  console.log("not divided by three");

}