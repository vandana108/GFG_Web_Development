 //short hand property

 function getObjects(name, city){
  return{
    name: name,
    city: city
    // name this is called short hand property 
    // city because we are not mentioning name city two time as above are given
  }
 }

 const obj = getObjects("Anjali", "Banglore");
 console.log(obj);

 const student = "Vaishali";
 const branch = "CSE";

 console.log(student, branch);