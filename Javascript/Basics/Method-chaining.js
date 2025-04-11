
function calculator(){
  let data = 0;
  this.add = function(val){
    data = data+val;
    return this;
  }

  this.sub = function(val){
    data = data-val;
    return this;
  }
  this.multi = function(val){
    data = data*val;
    return this;
  }
  this.divide = function(val){
    data = data/val;
    console.warn(data);

  }
  this.print = function(){
    return data;
  }

}
let cal1 = new calculator();
console.warn(cal1.add(20).multi(100).sub(10).print());

// class calculator{
//   data= 0;
//   add(val){
//     this.data = this.this.data+val;
//     console.warn(this.data);
//   }
// }
// let cal1 = new calculator();
// console.warn(cal1.add(20));
