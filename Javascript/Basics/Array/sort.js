const fruits = ["apple", "Pineapple", "cherry", "banana", "Mango" ];
 const c = fruits.sort();
console.log(c);

const numbers = [1, 9, 3, 8, 5, 31,27, 20, 11];

function sortInAscendingOrder(a, b){
  return a-b;
}
function sortInDescendingOrder(a, b){
  return b-a;
}
numbers.sort(sortInDescendingOrder);
console.log(numbers);