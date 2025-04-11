//Object: extensible object 
//shallow, deep copy and this keyword;

// const prakashDetails={
//   name: 'Prakash',
//   age: 20,
//   courses:  ['JS', 'React', 'CSS'],

//   showMessage: function(){
//     console.log("Hello everyone")
//   }
// }
// prakashDetails.city = "Mumbai"
// prakashDetails.stat = "MH"

// // console.log(prakashDetails);
// prakashDetails.showMessage();



// for(let ele in prakashDetails)
// {
//   console.log(prakashDetails[ele]);//computed property 

// }

//shallow copy
// const ashishDetails = prakashDetails;
// ashishDetails.name= 'ashish';
// ashishDetails.age =111;
// console.log(ashishDetails.name);
// console.log(prakashDetails.name);


// deep copy to different object have two different memory location
 
const prakashDetails={
    name: 'Prakash',
    age: 20,
    courses:  ['JS', 'React', 'CSS'],
   
  
    showMessage: function(){
      console.log("Hello everyone")
    },
    address: {
      city: "mumbai",
      state: "MH",

    }
  }


  prakashDetails.city = "Mumbai"
  prakashDetails.stat = "MH"
  


// const ashishDetails = {...prakashDetails, address:{...prakashDetails.address}};
// ashishDetails.courses =['DS', "Computer"]
// console.log(ashishDetails);
// console.log(prakashDetails.courses)
// console.log(ashishDetails.courses)



//destructure
// const {name , age, courses, address, showMessage} = prakashDetails;
// console.log(name);
// console.log(age);
// console.log(courses);
// prakashDetails.showMessage();

const{name, age, address: {city, state}} = prakashDetails; //nested destructuring concept
console.log(city);

//this keyword


const addres: {
  city: 'Delhi',
  country 'India',
  showAddress: function(){
    console.log(this, 'from show address');
  },
}
console.log(address.showAddress());