const user ={
  firstName: 'Anurag',
  lastName: 'Singh',
  get fullName(){
    console.log('getting....')
    return `${this.firstName} ${this.lastName}`
  },
  set fullName(value)
  {
    // console.log('setting...');
    // console.log(value);

    const[firstName, lastName] = value.split(' ')//destructuring
    
    this.firstName = firstName
    this.lastName = lastName
  }

}

// console.log(user.fullName());
user.fullName = 'Akash Kumar'