const colors = ['red', 'green', 'yellow', 'pink', 'black']
//destructuring is used  in object, arra and function basically

// using destructue
//  const [color1, color2, color3] = colors;

// const[,, colors3] = colors;


//without destructring 

// const color1= colors[0];
// const color2 = colors[1];
// const color3 = colors[2];




let user ={
  name: 'Anurag', 
  age: 35,
  address: {
    city: 'Banglore',
    state: 'karanatka',
  },
  
}
const {name: userName}= user

//using destructuring for object
//we can't change the variable name that we declared in object
// let [name, age]= user;//for the case there is nothing define in name so we have to declare some variable during destructuring time
const {address: {city}} = user
// const {address} = city;
// const { city } = address;


