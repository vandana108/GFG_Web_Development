//for loop
for(let i=0;i<10 ; i++)
{
  console.log("Hello World!!....");

}
console.log("Loop Execution Done!!!")

const userName = "Web Development";
for(let i=0;i<userName.length;i++)
{
  console.log(userName[i]);
}
for(let j=0;j<10;j++)
{
  for(let k=0;k<=j;k++){
  console.log(k);
  }
  console.log("\n");
}

const inputString = "hello, I am here";
const vowels = "aeiou";
for(let i=0;i<inputString.length;i++){
  if(vowels.includes(inputString[i])){
    console.log(`${inputString[i]} is a vowel`);
    
  }else{
    console.log(`${inputString[i]} is a consonant`);
  }
}