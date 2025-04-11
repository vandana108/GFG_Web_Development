function sayHi(){
  console.log('Hiiii');
}

h1.addEventListener('click', sayHi)

h1.addEventListener('click', function()
{
  console.log('Hiiiiii');
})
card.addEventListener('click', ()=>{
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  container.append(newCard)
})