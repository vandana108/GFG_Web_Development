// const numbers = [1, 2, 3,4, 5,6];

// function calculateMulti(acc, cur){
//   return acc*cur;

// }
// const initalValue =10;
// const result = numbers.reduce(calculateMulti, initalValue);
// console.log(result);




// const family = [{name: 'Prakash', hasBike:false, age:18},
//   {name: 'sakshi', hasBike:false, age:99},
//   {name: 'ashish', hasBike:true, age:25},
//   {name: 'avneet', hasBike:true, age:50}
// ]
// const initalVal =0;
// const  sum = family.reduce((acc, cur) => acc+cur.age, initalVal )
// const  sum = family.reduce((acc, cur) => cur.age>30? acc+cur.age : acc, initalVal )
// const  sum = family.reduce((acc, cur) => cur.hasBike===false? acc+cur.age : acc, 0 )
// console.log(sum);



//spreading in array: 

//cloning/ copying --> create a copy of the array
// const arr = [1, 2, 3, 4, 5]

// arr.push(6);
// arr.push([7, 8])
// const newArr = [...arr, 6, 7];
// const arr2 = [...arr, ...newArr, 8, 9];
// console.log(newArr);
// console.log(arr2);


// let a = 5;
// let b = a;//copying valuse of the variable a
// b=8;
// console.log(a, b);
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr;// copying reference of the array //shallow copy
// //  console.log(newArr);
//  newArr.push(6);
//  newArr.push(7);
//  newArr.push(8);
//  console.log('new Array --> ',newArr);

//  console.log('arr->',arr);



// const family = [{name: 'Prakash', hasBike:false, age:18},
//   {name: 'sakshi', hasBike:false, age:99},
//   {name: 'ashish', hasBike:true, age:25},
//   {name: 'avneet', hasBike:true, age:50}
// ]
// const initalVal =0;
// // function result( )
// // {
// //   let sum = family.reduce((acc, cur) => cur.age>30? acc+cur.age : acc, initalVal )
// //   return sum;
// // }
// const familyName = family.reduce((acc, cur) => cur.age>30? [...acc, cur.name] : acc, []);
// //--> acc = ['sakshi] ||| avaneet
// console.log(familyName);


//if hasbike

// const nameOfBiker = family.reduce((acc, cur) => cur.age>30? [...acc, cur.name]: acc, []);
// //acc = 'Prakash'
// //acc = sakshi
// //acc = 'ashish'
// //acc = 'avneet'
// console.log(nameOfBiker);


const inventory = [ {name: 'fans', quantity: 3}, 
  {name: 'chimneys', quantity: 0}, 
  {name: 'bulbs', quantity: 5},
  {name: 'stove', quantity: 1}
];

// a:Get all the items in an array whose quantity is less than 2
//b:Get the total quantity of items present in the inventory.
//c: find the object which contains the the item whose quantity is object zero

// console.log(inventory);
//done by me: let lessThanTwo = inventory.reduce((lessThanTwo, cur) => cur.quantity < 2 ? [...lessThanTwo.name]: lessThanTwo, []);
// console.log(lessThanTwo);

// for  a :

const quantityLessThan2 = inventory.reduce((acc, cur) => cur.quantity<2?[...acc, cur.name ]: acc, []);


// for b:

const totalQuantity= inventory.reduce((acc, cur) => acc + cur.quantity, 0);
const quantityZero =  inventory.reduce((acc, cur) => cur.quantity === 0 ? cur: acc,[]);
console.log(quantityLessThan2)
console.log(quantityZero);
console.log(totalQuantity)
