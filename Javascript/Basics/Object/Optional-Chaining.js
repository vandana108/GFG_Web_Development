
const user = {
  name: "Prakash",
  age: 99,
  address: {
  //   street: 'Kalina',
  //   city: 'Mumbai',
  },
  likes: "Eat Sing Sleep Repeat",
  getDisplayMessage:function(){
    console.log("Welcome Prakash");
  }
}

// console.log(user.address.city)
// console.log(user.address.land mark)

//Solution:1
if(user.address != undefined){
  console.log(user.address.city);
}
else{
  console.log("Address is not found");
}

//optional chaining

//solution: 2
// console.log(user.address?.city);
console.log(user.getDisplayMessage);

user.getDisplayMessage();