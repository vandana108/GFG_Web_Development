
// Map-Filter

const arr = [1, 2, 3, 4, 5];
function sqareOfNumber(arr){
  const tempArr = [];
  for(let number of arr){
   tempArr.push(number**2);

  }
  return tempArr;

}
const result = sqareOfNumber(arr);
console.log(result);
console.log(typeof result);

 