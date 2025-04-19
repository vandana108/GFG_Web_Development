class Children {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
// What are Static Methods?
// Static methods are functions defined on the class itself, rather than on instances of the class. This means that you can call a static method directly on the class, without having to instantiate an object from the class.
  static sortByAge(child1, child2) {
      return child1.age - child2.age;
  }
}

let child1 = new Children("Prakash", 11);
let child2 = new Children("Ashish", 19);
let child3 = new Children("Ria", 9);

let childrenArray = [child1, child2, child3];
childrenArray.sort(Children.sortByAge);

console.log(childrenArray);