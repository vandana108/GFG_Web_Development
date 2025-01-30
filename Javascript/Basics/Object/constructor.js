
// They are named with capital letter first.
// they should be executed only with "new" operator.
function Users(name, age){
  (this.name = name), (this.age = age);
}

const user1  = new Users("Radha", 25);
const user2 = new Users("Vandanatm", 50);
const user3 = new Users("Loki", 59);


console.log(user1);
console.log(user2);
console.log(user3);