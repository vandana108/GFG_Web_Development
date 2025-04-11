
//conditions
// conditional operators

// if(condition){
    // code to be executed if condition is true
// }

// ' ' --> string
// 3||3.55 --> Number
// true|false --> Boolean

// >|<| ==|!= |!==  >=|<=
//4>3

// const x =3;
// const y= 10;
// if(x<y){
//   console.log("x is less than y");
// }else{
//   console.log("x is greater than y");

// }

// const x =3;
// const y = '3';

// if(x===y){
//   console.log('yes');
// }
// else if(x>=y){
//   console.log('adios')
// }
// else if(x<=y){
//   console.log('amigos');
// }
// else{
//   console.log('no');
// }


// const x = 3;
// const y = '3';

// if(x !=y){//comparing with data only

//   console.log('adios');
// }
//== will check only value like 3 =='3' are equal
// === will check value and type also like 3 === '3' are not equal

// if(x !==y){

//   console.log('adios');
// }
// else{
//   console.log('no')
// }

// let n=5;

// if(n%2==0){

//     console.log("even");

// }
// else{

//     console.log("odd");

// }

//Logical Operator

// const y =7;
// if(y>3 && y<10){
//     console.log('yes');

// }
// else{
//     console.log("no")
// }
//given any number, if the number is divisible by 3 then log foo if it is 
//  divisible by 5 log bar. if it is divisible by borth 3 adn 5 then log foo bar, 
// otherwise just log number provided, for any number there should only be on output  

// const num =30 ;

// if( num%3==0 && num%5==0){
//     console.log('foo bar');
// }
// else if(num%3==0){
//     console.log('foo');
// }
// else if(  num%5==0){
//     console.log('bar');
// }
// else{
//     console.log(number);
// }



//Ternary Operator-- short hand for if-else condition
// condition ? execute the true case: execute the false case

// const isLoggedIn = true;
//const message = isLoggedIn ? 'logged in' : 'logged out'

// console.log('message')

// const x=3;
// const y= '2';
// x==y ? console.log('yes'): x>y ? console.log('x is greater than y'): console.log('y is greater than x')

const p= 21;
(p%3==0 && p%5 ===0)?console.log('foo bar'):(p%5 ==0)?console.log('bar'):(p%3===0)?console.log('foo'):console.log(p);