
//function definition
function introduceMe(username, profession, age){
  console.log(typeof(username))
  console.log(typeof(profession))
  console.log(typeof(age))
  console.log('Hi')
  console.log('My name is ndana Rai')
  console.log('I am '+profession)
  console.log('He is '+age+' year ago' )
  return true
} 
function aboutEducation(username1, username2){
  console.log(username1+username2)
  console.log('Ashoka institute of technology and Management, Vns')
  console.log('Roll number is 20')
  return true
}

 const returnValue = introduceMe('Vanna', 'Mechanical Engineer',25)//calling function 1st time
console.log('****************')
introduceMe()//calling function 2nd time
console.log('*********************')
aboutEducation('AITM',29);//calling function other functiojn
console.log("****make some gap please****")
aboutEducation("Shree Aditya Narayan Singh Public School", 221101)


function differentName(username='Jarvis')//funtion definition
{
  console.log(username);
  console.log("I have completed Bachelor")
}

differentName('Ravi Rai');//calling funtion 
differentName('Vandana');   
differentName('Anjali');
differentName();


// function addtion(username2, username3)
// {
//   username4 = username2+username3;
//   return username4
// }

// var returnValue = addtion(10,20);
// console.log("This is additon of two number = " +returnValue);