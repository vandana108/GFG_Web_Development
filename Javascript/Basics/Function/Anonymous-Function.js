//anonymousFunction() // we can not call this function here t anonymousFunction = function() in anonymous function
function anonymousFunction()
{
  console.log("hello world from GFG");
}
console.log("type of anonymous function")
anonymousFunction();
// anonymousFunction("Hi Vandana");

//return
function calculateSum(x,y){
  return x+y;

}
const result = calculateSum(13, 23);
console.log(result);