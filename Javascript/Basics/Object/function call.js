//Function Borrowing- Call and Apply and  Bind

const user1 = {
  name: "Prakash",
  age: 90,
  sayHi(){
    console.log(this.name);
  },
};

const user2 = {
  name: "Priyanka",
  age: 20,
  
};

const user3 = {
  name: "Shwejal",
  age: 29,
  sayHi(){
    console.log(this.name);
  },
};
console.log(sayHi());