let displayMessage = "Hi I am student at GFG";
let count =0;
for(let char of displayMessage){
  if(char === "v"){
    count++;
  }
}
console.log(count);

const index = 1;
//ASCII Code
const asciiCod = displayMessage.charCodeAt(index);

console.log(`The ascii code of ${displayMessage.charAt(index)} is ${asciiCod}`);
