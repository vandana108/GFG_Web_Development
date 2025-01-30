
// // destructuring Object

// let obj = {
//   name: "Prakash",
//   address: {
//     state: "MH",
//     city: "Mumbai",
//     locality: "Santacruz"
//   },
//   courses: ["html", "CSS", "Javascript"]

// }
// let {name, address, courses}= obj;
// console.log(name);
// console.log(courses);

// let{name: userName}= obj;//rename the name into userName
// console.log(userName);
// let{address: userAddress}=obj;
// let{address: {city}}= obj;
// console.log(city);
// console.log(userAddress);

//nesting object
const employees = {
  engineers:{
    em1:{
      id: 1,
      name: "Anuradha",
      occupation: "Front-end Engineer",
    },
    em2:{
      id: 2,
      name: "Anjali",
      occupation: "Software Developer",
      
    },
  },
  placement: {
    em3:{
      id: 3,
      name: "Ankit",
      occupation: "Full Stack Developer",
    }

  },
  youtube: {
    em4:{
      id: 4,
      em_name : "Anand",
      occupation: "Devops Engineer"
    },
  }
}

// let{engineers: {em2: {name, occupation}}}= employees;
// console.log(em2);

let{youtube: {em4}} = employees;
console.log(em4);