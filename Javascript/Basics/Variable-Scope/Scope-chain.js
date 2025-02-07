//Scope and Scope chain

// let a = 3;
// function x(){
//   let b = 5;
//   console.log(a);
//   function y(){  // inner function - inside function x
    
//     console.log()
//   }
// }

let a =3;
let b = 5;
let c = 7;
function x(){

  console.log({a});
  function z(){
    //inner function - inside function
    console.log({b});
    function z(){
      console.log({c});
    }
    //z();
  }
  //y();


}