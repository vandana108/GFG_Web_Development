
// Inheritance
//parent class
class Laptop{
  constructor(ram, processor, generation){
    this.ram = ram;
    this.processor = processor;
    this.generation = generation;

  }
  displayMessage(){
    console.log(`Laptop Spec:: RAM${this.ram} - Processor ${this.processor} - ${this.generation} Generation `)
  }

}
//child or subclass
class Dell extends Laptop{
  constructor(ram, processor, generation){
    super(ram, processor, generation); // super means access to parent class
  }
}
const dell = new Dell("8GB", "intel", "i5");
console.log(dell);
class Lenovo{

}