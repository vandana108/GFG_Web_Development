// A Polyfill is a piece of javascript code used to provide modern functionality on older browser that do not support it.
//Polyfill for map

const arr = [1, 2, 3, 4, 5];
const squaredArr = arr.map((number)=> number**2);
console.log(squaredArr);
console.log(typeof arr);
function callback(number){
  returnnumber**2;
}

const squaredArr = arr.map((number) => number**2)
console.log(squaredArr)
let tempArr=[];
for(let i=0;i<arr.length;i++){
  tempArr.push(arr[i]**2);
}
console.log(tempArr);

Array.prototype.myApp = function(callback){
let tempArr= [];
for(let i=0;i<this.length;i++){
  let power = this[i]**2;
  tempArr.push(callback(this[i]))
}
return tempArr;
};
