//The # symbol is used before the property name to declare it as private.

// class User{
//   #id;//private property
//   constructor(id){
//     this.#id = id;
//   }

//   //method to access the private ID
//   getId(){
//     return this.#id;
//   }

//   //Method to change th eprivate ID
//   changeID(newId){
//     this.#id = newId;
//   }
// }
// const user = new User('123');
// console.log(user.getId());//user



class Car{
  #price; // declared variable as private
  constructor(price)
  {
    this.#price = price;
  }

  //method to access private id
  getPrice(){
    return this.#price;
   
  }

  
}

const audi = new Car('987644');
console.log(audi);
