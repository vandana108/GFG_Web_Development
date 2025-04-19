// class

// function User(name. age){}
// const user1 = new User()
// const user2 = new User()

class User{
  constructor(name, role, isAdmin, isLoggedIn ){
    (this.name = name),
    (this.role = role),
    this.isAdmin= isAdmin,
    this.isLoggedIn = isLoggedIn
  }
  displayInfo(){
    console.log(`${this.name} is a ${this.role}`)
  }
}

const user1 = new User('vandana', 'software engineer', 'yeah', 'true')
console.log(user1.displayInfo());
const user2 = new User('My friend', 'businessman', 'false', 'yes')
console.log(user2.displayInfo());
user2.displayInfo();


console.log(user1);