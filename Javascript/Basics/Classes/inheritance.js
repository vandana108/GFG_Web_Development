
// Inheritance
//parent class
class Laptop{
  constructor(ram, processor, generation){
    this.ram = ram;
    this.processor = processor;
    this.generation = generation;

  }
  displayMessage(){
    console.log(`Laptop Spec:: RAM${this.ram} - Processor ${this.processor} - ${this.generation} Generation - modelName${this.modelName} -price ${this.price}`);
  }

}
//child or subclass
class Dell extends Laptop{
  constructor(ram, processor, generation, modelName, price){
    super(ram, processor, generation); // super means access to parent class
    this.modelName = modelName;
    this.price = price;
  }
}
const dell = new Dell("8GB", "intel", "i5", "Dell Inspiron", 50000);
console.log(dell);
dell.displayMessage();
class Lenovo{

}