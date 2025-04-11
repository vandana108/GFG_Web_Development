// Logical operator with conditional statement
// || Or operator
// & AND operator
// ! NOT operator
// NULLISH COALESCING 

const physics =90;
const maths = 95;
const chemistry = 83;
const biology = 96;
if(physics > 85 && maths > 85 && chemistry > 85)
{
  console.log("You are eligible for IIT....");

}
else{
  console.log("You are not eligible for IIT.....");
}

if(physics > 90 || maths > 85 || chemistry > 85)//or operator
  {
    console.log("You are eligible for IIT....");
  
  }
  else{
    console.log("You are not eligible for IIT.....");
  }