// const numbers = [1, 2, 3,4, 5,6];

// function calculateMulti(acc, cur){
//   return acc*cur;

// }
// const initalValue =10;
// const result = numbers.reduce(calculateMulti, initalValue);
// console.log(result);




const family = [{name: 'Prakash', hasBike:false, age:18},
  {name: 'sakshi', hasBike:false, age:99},
  {name: 'ashish', hasBike:true, age:25},
  {name: 'avneet', hasBike:true, age:50}
]
const initalVal =0;
// const  sum = family.reduce((acc, cur) => acc+cur.age, initalVal )
// const  sum = family.reduce((acc, cur) => cur.age>30? acc+cur.age : acc, initalVal )
const  sum = family.reduce((acc, cur) => cur.hasBike===false? acc+cur.age : acc, 0 )
console.log(sum);