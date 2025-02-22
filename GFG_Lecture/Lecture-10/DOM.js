// DOM: Document Object Model, the browser convert html into something which understand by javascript to work on webpage
// its treelike structure

let count  = 0;


const clickButton = document.querySelector('#primarybtn');
console.log(clickButton);
const uploadButton = document.getElementById('upload-btn-id')
const buttons = document.querySelectorAll('.primary-btn');

console.log(buttons);
console.log(clickButton)

uploadButton.addEventListener('click', function(){
  count++;
  console.log(count);
})

uploadButton.addEventListener('click', () =>{
  console.log('click em clicked')
})



