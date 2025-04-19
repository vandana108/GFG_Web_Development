

//parent class
class Laptop{
  constructor(ram, processor, generation){
    this.ram= ram,
    this.processor= processor,
    this.generation = generation
  }
  displayMessage(){
    console.log(`Laptop space: ${this.ram} + processor: ${this.processor} + generation: ${this.generation}`);

  }
}
//child class
class Dell extends Laptop{
  constructor(ram, processor, generation){
    super(ram, processor, generation);//Call the parent class's constructor
  }
}
const dell = new Dell('8GB', "intell", "i5");
console.log(dell);

dell.displayMessage();
//child class
class Lenovo extends Laptop{
  constructor(ram, processor, generation, modelName){
    super(ram, processor, generation),//Call the parent class's constructor
    this.modelName = modelName
    
  }
  displayMessage(){
    super.displayMessage();
  }
  location(){
    console.log(`Lenovo's working location is Mumbai and it provides this ${this.modelName} model`)
  }

}
const lenovo = new Lenovo('16GB', 'intell', 'i7', 'Thinkpad');
console.log(lenovo);
lenovo.location();