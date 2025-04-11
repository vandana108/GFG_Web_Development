// Read data from user

const readlineSync = require("readline-sync");

const userName  = readlineSync.question("May I know your name:? ")

// console.log(userName);

console.log("Welcome "+ userName + " to GFG Courses"); //this is old way to print let's use other way

console.log(`Welcome ${userName} to GFG Courses`);

const userAge = readlineSync.question("May I ask your Age ? ")
const yearOfBirth= 2025-Number(userAge)
console.log(`Yor were born in the year fo ${yearOfBirth}`)
// node Javascript\Basics\read-user-data 
// Running the Code
// To run this code, open your terminal, navigate to the directory containing your script, and use the following command:

// node your-script-file.js
// Replace your-script-file.js with the name of your JavaScript file.
// 