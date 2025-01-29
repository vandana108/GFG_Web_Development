
const person1 = {
  name: 'John',
  age: 101,
  address:{
    city: "Mumbai",
    state: "Mh"
  }
}
console.log(person1);
// const person2 = person1;

// person2.name = "Ashish";
//  console.log(person1);
//  console.log(person2);

const person3 = Object.assign({}, person1);

person3.name = "Ashiss";
person3.address.city = "Sirsa";
person1.age =111;

console.log(person1);
console.log(person3);
