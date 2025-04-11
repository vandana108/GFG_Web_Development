const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name');

// nameElement.innerText = localStorage.myName
nameElement.innerText= localStorage.getItem('myName')

nameInput.addEventListener('input', (e) => {
  // localStorage.myName = e.target.value;
  localStorage.setItem('Vanshika')
  nameElement.innerText = localStorage.myName;
  
})

ageElement.innerText = localStorage.getItem('myAge')
ageInput.addEventListener('input', (e) => {
  localStorage.setItem('myName', e.target.value);
  ageElement.innerText = localStorage.getItem('myAge')
})

const myData = {
  name: '',
  age: '',
}

nameInput.addEventListener('input', (e) => {
  myData.name = e.target.value
  localStorage.setItem('myData', JSON.stringify(myData))
})