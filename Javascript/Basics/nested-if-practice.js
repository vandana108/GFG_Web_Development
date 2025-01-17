//A program that reads 3 string adn print the smallest string
const thirdString = "watermelon";
const firstString = "apple";
const secondString= "Kiwi";


const lengthOfFirstStr = firstString.length;
const lengthOfSecondStr = secondString.length;
const lengthofThirdStr = thirdString.length;

//logic to find smallest one

if(lengthOfFirstStr < lengthOfSecondStr && lengthOfFirstStr<lengthofThirdStr)
{
  console.log(`${firstString} is the smallest string`)

}else if(lengthOfSecondStr<lengthOfFirstStr && lengthOfSecondStr<lengthofThirdStr)
{
  console.log(`${secondString} is the smallest string`);
  
}
else{
  console.log("One or more strings are the same length")
}