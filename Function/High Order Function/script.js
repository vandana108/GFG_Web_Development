function a()
{
  console.log('Hii Rai')
}

a('hi');
a({username: 'anurag', userAge: 50})
a([1,7,8,9])
console.dir(a);

function sayHi(){
  console.log('Hiiiiiiiiiiii')
}

const x=sayHi;
a(sayHi);  //here sayHi will work as an arguement b and jump to the function a(b) give output Hii Rai

//callback function
a function(){
  console.log('Callback Function')
}