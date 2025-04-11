
// for(initialization; condition; increment/decrement)
// {
  // code to be executed
// }
// let x =4;
// x= x+4;
// console.log(x);
// console.log('start loop')
// for(let i=0; i<10;i++){
//   console.log(i);
// }
// console.log('end loop ')



// for(let i=0;i<10;i++){
//   if(i%2==0){
//     console.log('even');
//   }
//   else{
//     console.log('odd');
//   }
// }


for( let i=0; i<50;i++)
{
  if(i%3==0 && i%5==0){
    console.log('foo bar');
  }
  else if(i%3==0){
    console.log('foo');
  }
  else if(i%5==0){
    console.log('bar');
  }
  else{
    console.log(i);
  }
}