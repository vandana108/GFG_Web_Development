const colors=['red', 'green', 'yellow', 'pink', 'voilet']

const user = {
  name:'Vandana',
  age: 25,
  address: {
    city: 'Banglore',
    state: 'Karnataka',
  },
}
//without destructure
// const colors1 = colors[0]
// const colors2 = colors[1]
// const colors3 = colors[2]

//using destructure
// const{name, age, address, address:city }=user
const{address:{city}}=user
const{2: colors3,}=colors //2 is as index of green color
const{address:{state}}=user
function intro(userObj){
  console.log(userObj)
  
}

function printColor([a,b,g]){
  console.log(a,b,g);
}

printColor(colors)

// function printColor({2: colors3}){
//   console.log(colors3);
// }

// printColor(colors)