//lecture 24



// const nameAndNumberlist = [
//   ['Akask','95'],
//   ['Vandna',99],
//   ['anjali',98],
// ]
// const ticTactoe = [
//   ['X', null, null],
//   [null, null, 'O'],
//   ['O', null, 'X'],

// ]



//const fruits = ['Mango', 'Apple', 'Orange']//created array


// const myFruits ={};//created empty object
// Object.assign(myFruits, fruits)

// myFruits.push('Dates')
// myFruits.push('Grapes')



// const user1 = {//created object
//   firstName:'Anurag',
//   lastName: 'Singh',
// }
// const user2 = {
//   firstName:'Vinita',
//   lastName:'Pandey',
// }


// //user1= user2;
// //Object.assign(user2, user1);//user2= user1
// const user3={...user2}//spread operator is more efficient than assignment operator


// const username1= 'Anurag';
// let username2 = username1

// username2 = username2+ 'Singh'

const fruits = ['Mango', 'Apple', 'Orange']
const myFruits =['Mango', 'Banana']
const myfruits=fruits//shallow copy because changes will be at address;
fruits[1]= 'lichi'
console.log(fruits)
console.log(myfruits)
fruits =[...myFruits]

