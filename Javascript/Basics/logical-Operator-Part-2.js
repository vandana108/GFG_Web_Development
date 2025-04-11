const firstName = null;
const nickName = "";
const userName = "HiddenGeek"||firstName||nickName;//Short Circuting
console.log(`Name- ${userName}`);


let a=12;
let b=1;

console.log(a+(b||0));
console.log(`a: This is the answer = ${3||2||11}`);
console.log(`b: This is the answer = ${""||2||1}`);
console.log(`c: This is the answer = ${""||null||2}`)

// for AND operator

console.log(a+(b||0));
console.log(`a: This is the answer = ${3&&2&&1}`);
console.log(`b: This is the answer = ${""&&2&&1}`);//false || true || true
console.log(`c: This is the answer = ${undefined&&null&&2}`)//true && true && true
console.log("undefined" && 'null' && "")//true && true && false