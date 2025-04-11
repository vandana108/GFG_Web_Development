const userName = prompt('Please Enter Your Name')
const userAge = parseInt(prompt('Please Enter Your Age'))
// console.log('Name:${username}');
// console.log('Age: ${userAge}');

if(userAge>10 && userAge<18){
  document.write('${username} is a kid');
   document.write('and he/she is playing');
  
}
else if(userAge>18){
    document.write('${username} is a collage student');
    document.write('and he/she is learning Web development and DSA');
}