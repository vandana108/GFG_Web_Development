const usernameInput = document.querySelector('username')
usernameInput.addEventListener('click', ()=>{
  
  console.log('input clicked');
})

usernameInput.addEventListener('dblclick', ()=>{
  console.log('input clicked');
})
window.addEventListener('keydown', (e)=>{
  console.log('Code', e.code);
  console.log('value', e.key);
})