// closure
function x(){
  let a =20;
  function y(){
    console.log(`this is the value of a = ${a}`);

  }
 return y;
  // return a ;
}
let ans = x();
ans();

// function a(){
//   var m = 5;
//   // console.log(m);
//   function b(){
//     console.log(b);
//     var m= 7;

//   }
//   // b();
 
// }

// a();