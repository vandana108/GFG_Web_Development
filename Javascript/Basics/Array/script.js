// let s1 = "Prakash";
// let s2 = "Ashish";
// let s3 = 'Adarsh';
// let s4 = "Ashish";
 
//Array is non-primitive data type
let studentsName = ["Prakash", "Adarsh", "Riya", "Ashish", "Piyush", "Jay"];
console.log(studentsName);
//we can add arrays inside array
let std_Name = ["Prakash", "Adarsh", "Riya", "Ashish", "Piyush", "Jay", [1,2,3, "Vandana"]];
console.log(std_Name);

let arrLength = studentsName.length;
for(let i=0;i<arrLength;i++)
{
  console.log(studentsName[i]);
}
console.log("Use of in keyword")
for(let index in studentsName)
  {
    console.log(studentsName[index]);
  }
  console.log("Use of 'of' keyword")
  for(let index of studentsName)
    {
      console.log(index);
    }