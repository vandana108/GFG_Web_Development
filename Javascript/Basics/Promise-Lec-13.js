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


// const students = [{id:1, name:'Prakash' },{id:1, name:'Vimal'}, {id:1, name:'maruf'}]
// const promise = new Promise((resolved, rejected )=> {
  
//     rejected(console.log('promise rejected'))
  
    
//       resolved(console.log('promise resolved'))
    
//   })

//   console.log(promise);
//   promise.then(()=>{ //if promise resolved  then keyword is can be used
//     console.log('responce')
//   })

//   promise.then((response)=>console.log(responcse)).catch((error) => console.log(error))


// const students = [{id:1, name:'Prakash' },{id:1, name:'Vimal'}, {id:1, name:'maruf'}]
// let isAdmin = true;
// const Promise = new Promise((resolved, rejected )=> {
//   if(isAdmin){
//     rejected(console.log('promise rejected'))
//   }
//     else{
//       resolved(console.log('promise resolved'))
//     }
//   })

//  const promise = new Promise((res)=>{
//   setTimeout(()=>{
//     res('Promise 1 resolved')
//   }, 1000)
//  }).then(res =>{
//   console.log(res)
//   return new Promise((reject)=>{
//     setTimeout(()=>{
//       reject('promise 3 rejected')
//     },1000)
//   })
//  }).then(res=>console.log({res}))
//  .catch(err=> console.log({err}))

// promise.then(response =>{
//   console.log(response)
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//      resolve('promise 2 resolved')
//     },1000)
//   })
// })

//  promise.then(res=>{
//   console.log(res);
//   return 'hello'
//  }).then(res => console.log(res))

// console.log(fetch('https://dummyjson.com/test'))
// fetch('https://dummyjson.com/test')
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))
//API has two states: 


//callback hell
//Promise hell
fetch('https://dummyjson.com/RESOURCE/?delay=1000')
.then(res=> res.json())
.then(res =>{
  console.log(res);
  fetch('https://dummyjson.com/RESOURCE/?delay=1000')
  .then(res=>res.json)
  .then(res => console.log(res))
})
.catch(err => console.log({err}))