const user = {
   fistName: 'Anurag',
   lastName: 'Singh',
   age: 25,
}
function getAgeYear(age){
  return new Date().getFullYear()-age
}