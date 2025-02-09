
//map, filter and reduce

// const numbers = [1,2, 3, 4, 5, ]

// const doubleNumber = (numbersArr) => {
//   let tempArr = [];
//   for(let i=0 ; i<numbersArr.length;i++){
//       tempArr.push(numbersArr[i]*2);
//   }
//   return tempArr;
// }

// const value = doubleNumber(numbers);
// console.log(value);



// const numbers = [1,2, 3, 4, 5, ]
// numbers.push(21);
// const doubleNumber = (numbersArr) => {
//   let tempArr = [];
//   for(let i=0 ; i<numbersArr.length;i++){
//       tempArr.push(numbersArr[i]*2);
//       tempArr.push(numbersArr[i]*2);
//   }
//   return tempArr;
// }

// const value = doubleNumber(numbers);
// console.log(value);


//map: map is higher order function
// const numbers = [1,2, 3, 4, 5, ];
// function doubleNumbers(number){
//   return number*2;

// }
// const result = numbers.map(doubleNumbers);
// console.log(result);


//example: 2::  add one

// const numbers = [1,2, 3, 4, 5, ];
// function addOne(number){
//   return number+1;
// }
// const result = numbers.map(addOne);
// console.log(result);

//arrow function

// const numbers = [1,2, 3, 4, 5, ];
// function doubleNumbers(number){
//   return number*2;

// }
// const result = numbers.map(num => num*3);
// console.log(result);


const numbers = [1,2, 3, 4, 5, ];
 function doubleNumbers(number){
    return number*2;
  
  }
  const result = numbers.map(num => num%2==0 );
  console.log(result);
