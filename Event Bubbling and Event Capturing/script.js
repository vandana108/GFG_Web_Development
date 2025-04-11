const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

window.addEventListener('click', (e) => {
  console.log('Window Event Listener')
})
document.addEventListener('click', (e) => {
  console.log('5.  Document Event Listener')
})
document.addEventListener('click', (e) => {
  console.log('4. Body Event Listener')
})
green.addEventListener('click', (e) => {
  console.log('3. Green Event Listener');
})

pink.addEventListener('click', (e) => {
  console.log('2. Body Event Listener');
})

blue.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('1.Pink Event Listener');
},true)