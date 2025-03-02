//Promise
// Promise states: pending | fulfilled/resolved | rejected | settled
// Promise Value | Reason
// const Promise = new Promise((resolved, rejected )=> {
//   console.log('here')
//   setTimeout(()=>{
//     resolved(console.log('promise resolved'))
//   }, 2000)
// })

// const Promise = new Promise((resolved, rejected )=> {
//   setTimeout(()=>{
//     rejected(console.log('promise rejected'))
//   },2000)
//     setTimeout(()=>{
//       resolved(console.log('promise resolved'))
//     }, 3000)
//   })


const students = [{id:1, name:'Prakash' },{id:1, name:'Vimal'}, {id:1, name:'maruf'}]
const promise = new Promise((resolved, rejected )=> {
  
    rejected(console.log('promise rejected'))
  
    
      resolved(console.log('promise resolved'))
    
  })

  console.log(promise);
  promise.then(()=>{ //if promise resolved  then keyword is can be used
    console.log('responce')
  })

  promise.then((response)=>console.log(responcse)).catch((error) => console.log(error))