
// Promise
const isRequestSuccessful = true;
let promise = new Promise((resolve, reject) => {
  if(isRequestSuccessful){
    resolve("Promise resolved")
  }
  else{
    const error = new Error("Something went wrong")
    reject(error);

  }
})

console.log(promise);