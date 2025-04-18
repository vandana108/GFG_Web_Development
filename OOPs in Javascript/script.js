// const user = {
//    fistName: 'Anurag',
//    lastName: 'Singh',
//    age: 25,
// }
// function getAgeYear(age){
//   return new Date().getFullYear()-user.
// }

// const user1 = {
//   fistName: 'Anurag',
//   lastName: 'Singh',
//   age: 25,
//   getAgeYear: function(){
//     return new Date.getAgeYear()-user.age
//   }
// }

// function createUser(){
//   const user = {
//     firstName: 'Vandana',
//     lastName: 'Srivastava',
     
//   }
//   return user
// }


const user= {
  firstName: 'Anurag',
  lastName: 'Singh',
  age: 5,
  //how to keep function inside an object: we can keep in two ways
  // 1; this is  first way to use object

  getAgeYear: function(){
    return new Date().getFullYear() - user.age

  }
  
}


function createUser(firstName, lastName, age){
  const user={ 
    
    firstName,
    lastName,
    age,
    getAgeYear(){
      return new FormDataEvent()
    },

  }
  return user
}

const user1 = createUser('Aman', 'Mishra', 32)
const user2 = createUser('Anurad', 'Singh', 72)

const arr1 = [1,2]
const arr2 = [3, 4]








// 

// function getAgeYear(age){ //Procedural or functional programming
//  return new Date().getFullYear()-age
// }