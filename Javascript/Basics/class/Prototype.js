// Prototype:
// what is prototype: :
// prototype chaining
// same method
// value of this
// for is v/s Object.keys

const loggedInStatus={
  isLoggedIn: true,
}
const admin = {
  isAdmin: true,
  __proto__: loggedInStatus,
};

const user = {
  name: "prakash",
  role: "mentor",
  __proto__: admin,//this is reseverd keyword for user
  showMessage(){
    console.log("Hello team, how have you been!!");
    console.log(this.__proto__)
  },
};

console.log(user);
// user.showMessage();
// console.log(Object.keys(user));

for(let key in user){
  console.log(key);
}