// Promises is object

const p = new Promise((resolve, reject) => {
  // resolve({name: 'Vandana'})
  // setTimeout(() => {

  // }, 4000)

  resolveBtn.addEventListener('click', () => {
    resolve('Promise Resolved')

  })

})

p.then( () => {
  console.log('hii');
})