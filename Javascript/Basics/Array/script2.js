
//Array Method - push & concat
//Mutable(changed ) Object OR Immutable (Not changed)
let fruits = ["apple", "mango", "banana" ];
// console.log("frut");
fruits.push("orange");
console.log(fruits);
fruits.pop("orange");

console.log("This is after:  " + fruits);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);