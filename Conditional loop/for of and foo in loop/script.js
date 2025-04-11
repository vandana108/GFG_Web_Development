

// 'stric user'
const fruits=['banana', 'apple', 'peach', 'grapes']
//this is the simple loop
// for(let i=0;i<fruis.length;i++){
//   console.log(fruits[i]);
// }


//for of loop
for(fruit of fruits)
{
  console.log(fruit)
}

const user ='Vandana Rai'
for(const letter of user){
  console.log(letter);
}

const person = {
  firstName: 'Vandana',
  lastName: 'Rai',
  age: '45',
  eyeColor: 'Black',
  city: 'Banglore'

}
//See in above given array is not iterable thatswhy we can not use for loop 
for(const info in person)
{
  console.log(info);
}
console.log("\n\n\n")//to jump on new line
for(const key in person)
{
  console.log(key);
}

 