// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json)) {
//         console.log('Got the data');
//         console.log(json)
//         userData = json
//       }


// const image = document.querySelector('img')
// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//   const xhr = new XMLHttpRequest()

//   console.log(xhr);
//   xhr.open('GET','https://images.dog.ceo/breeds/poodle-standard/n02113799_254.jpg')
//   xhr.send()

// })
const xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.addEventListener('load', () => {
  console.log(xhr);

})

xhr.open('GET', 'https://images.dog.ceo/breeds/poodle-standard/n02113799_254.jpg')
xhr.send()