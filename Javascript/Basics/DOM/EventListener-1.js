let startButton = document.querySelector(".btn-start");
function showMessage(){
  console.log("Button Clicked");

}
// startButton.addEventListener("click", showMessage);

startButton.addEventListener("click", () =>{
  startButton.innerText = "Begin"
})