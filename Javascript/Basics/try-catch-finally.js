const userName = "Prakhar";
try{
  // someFunction();
  console.log("hey there");
  // console.log();

}catch(error){
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);


}finally{
  console.log("finally executed");

}
console.log(userName);