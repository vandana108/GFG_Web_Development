function getBirthYear(){
  return new Date().getBirthYear()-user.age
}

function CreateUser(firstName, lastName, age){
  
    this.firstName= firstName;
    this.lastName = lastName
    this.age = age
  
  }
 

CreateUser.prototype.getBirthYear = function(){
  return new Date().getFullYear()-this.age
}
// createUser.commonMethods ={
//   getBirthYear: function(){
//     return new  Date().getFullYear()-this.age
//   },
// }
CreateUser.prototype.getFullName = function(){
  return this.firstName + ' '+ this.lastName
}
const user1 = new createUser('Aman', 'Mishra', 32)
const user2 = new createUser('Anurag', 'Singh', 72)



