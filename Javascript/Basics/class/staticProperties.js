


//static Properties: Static properties are variables that are attached to the class itself rather than to objects created from the class. This means all instances of the class share the same static property.
class Children{
  static id = 1;
  constructor(name, age, id){
   
    this.name= name;
    this.age = age;
    this.id = Children.id++;

  }
  static sortByAge(a,b){
    return a.age-b.age;
  }
  
}

const child1 = new Children('Prakash', 11);
const child2 = new Children('ashish', 19);
const child3 = new Children("riya", 9);

let arr= [child1, child2, child3];
console.log(arr.sort((a, b) => a.age - b.age));