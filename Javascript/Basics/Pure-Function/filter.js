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

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const reduceFun = (acc, cur) => acc+cur;



const answer = arr.reduce(reduceFun, 10);

console.log(answer);