
// const personObj = {
//   name: "Anjali",
//   age: 20,
//   job: "Software developer",
//   courses: ["html","CSS", "Javascript", "React"],
//  "is Admin": "true",
//   is_true: true

// };

// console.log(personObj.name);
// console.log(personObj.is_true);

// console.log(personObj["courses"]);
// console.log(personObj['age']);

const obj = {
  branch: "Computer Science",
  greetMessage: function(){
    console.log("Hi, I am from Computer Science branch");
  },
  bye(){
    console.log("Tata Bye Bye, Khatam");
  }
}

console.log(obj.greetMessage);//this is not suitable
obj.greetMessage();
console.log(obj.bye());
obj.bye();