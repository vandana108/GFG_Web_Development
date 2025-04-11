const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
let count = 1;

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('.card')
  newCard.innerText = count++;
  container.append(newCard)
})


setTimeout(() => {
  input.focus
})


// const intervalId = setInterval(()=>{
//   if(count>999){
//     clearInterval(intervalId)
//   }
//   addCardBtn.click()
// },5)