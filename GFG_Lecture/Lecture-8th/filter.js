
// const numbers = [1,2,3,4,5,17, 33];

// function callBack(number){
//   return number>4;
// }

// const filteration = numbers.filter(callBack);
// console.log(filteration);

// const numbers = [1,2,3,4,5,17, 33, 6];

// const callBack = (number) => {
//   if(number%2==0)
//     return number;
// }

// const filteration = numbers.filter(callBack);
// console.log(filteration);

// const arrOfObj = [{name: 'Prakash', age:18}, {name: 'Sakshi', age: '21'}, {name:"Ashish", age:23}, {name: "Avneet", age:23}];

// function callBack(ele){
//   return ele.name
// }

// const names = arrOfObj.map(ele=> ele.name);
// const age = arrOfObj.map(ele => ele.age);

// const filterAge = arrOfObj.filter(ele=> ele.age >20);
// const filteredNames = arrOfObj.filter(ele => ele.age>20).map(ele=> ele.name)//method chaining
// console.log(filteredNames);



const arrOfObj = [{name: 'Prakash', age:18}, {name: 'Sakshi', age: '21'}, {name:"Ashish", age:23}, {name: "Avneet", age:23}];



const names = arrOfObj.map(ele=> ele.name);
const age = arrOfObj.map(ele => ele.age);

const filterAge = arrOfObj.filter(ele=> ele.age >20);
const filteredNames = arrOfObj.filter(ele => ele.age>20).map(ele=> ele.name)//method chaining
console.log(filteredNames);