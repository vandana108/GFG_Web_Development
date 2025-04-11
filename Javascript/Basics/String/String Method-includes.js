const displayMessage = "I like to code in dark mode";
const vowels = "aeiouAEIOU";

for(let char of displayMessage){

  if(vowels.includes(char)){
   
    // console.log("I think you are Developer")
    console.log(`${char} is vowel` )
  }
  else{
    console.log(`${char} is consonant`);
  }
  
}