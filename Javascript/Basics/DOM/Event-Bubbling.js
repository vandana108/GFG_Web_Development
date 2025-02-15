// document.querySelector("#grandparent")
// .addEventListener('click',()=>{
//   console.log("Grandparent Clicked!");

// });

// Event Listener for Grandparent
document.querySelector("#grandparent").addEventListener('click', () => {
  console.log("Grandparent Clicked!");
});


//Event Listener for parent

document.querySelector("#parent").addEventListener('click', () =>{
  console.log("Parent Clicked!");
})

//Event Listener for child

document.querySelector("#child").addEventListener('click', () =>{
  console.log("Child Clicked!");
})