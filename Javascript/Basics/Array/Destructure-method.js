//destructure method

// const numbers = [1, 2, 3];
// const [first, second, third, courses] = [1, 2, 3, ["HTML", "CSS", "Javascript", "SQL"]];
// console.log(first, second, third, courses); 

// const arr = [1, 2, 3];
const arr = [1, 2, 3, ["HTML", "CSS", "Javascript", "SQL"]];
const[ , , , courses]=arr;
console.log(courses);

let a =5;
let b =10;
[a, b]=[b, a];
console.log("A - ", a);
console.log("B - ", b);