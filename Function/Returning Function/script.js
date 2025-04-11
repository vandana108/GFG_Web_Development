const a=10; 
const b=20;

function parent(){
  
  function add()
  {
    console.log(a+b);
  }
  return add
}

// console.dir(add);