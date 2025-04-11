 const dayNumber=4;

switch(dayNumber){
  case 0:
    document.write('It is Sunday Today')
    break;
    debugger
  case 1:
    document.write('It is Monday Today');
    break;
  case 2:
    document.write('It is Tuesday Today')
    break;
    case 3:
      document.write('It is Wednesday Today')
      break;
    case 4:
      document.write('It is Thursday Today')
      break;
    case 5:
      document.write('It is Friday Today')
      break;
    case 6:
        document.write('It is Saturday Today')
        break;
    default:
        document.write('Not Valid Input');
        break; //optional hai 

}
document.write("<br>")
let myName = "Alex";//let is use for assigning value
let myAge = 32;
document.write("My name is : "+myName +" "+"and  my age is : "+myAge+"<br>")


//we can take input by user using prompt keyword
let userName= prompt("Enter your name please: ");
let userAge = prompt("Enter your age please! "+"<br>");
document.write("This is my Name : "+userName+"<br>"+"This is my Age : "+userAge);
//document.getElementById('demo').innerHTML=myName + myAge;


//using dialog box i.e., alert box
 userName= prompt("Enter your name please: ");
 userAge = prompt("Enter your age please! "+"<br>");
alert(myName+myAge);

//using console.log

let user1= prompt("enter your name user1")

let age=prompt("Enter your name age2: ");
console.log(user1 + age);
const result=0? 'Anurag':'Singh';//Ternary Operation
console.log(result);


