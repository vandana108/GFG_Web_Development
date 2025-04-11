// Prototype:
// what is prototype: :
// prototype chaining
// same method
// value of this
// for is v/s Object.keys

const admin = {
  isAdmin: true,
};

const user = {
  name: "prakash",
  role: "mentor",
  __proto__ : admin,
  showMessage(){
    console.log("Hello");
  },
};

console.log(user);
console.log(Object.keys(user));

for(let key in user){
  console.log(key);
}