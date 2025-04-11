const str1= "HELLO WORLD!";
console.log(str1.toLowerCase());
const str2 = "world is heaven, man";
console.log(str2.toLocaleUpperCase());
console.log(str2.toUpperCase());

//substring

// const  userName = "Prakash Singh Rathore";
// const name1 = userName.substring(2, 5);
// console.log(name1); /// 5th index's value will be exclude

//trim: trim() is particularly useful for cleaning up strings by removing unwanted spaces from both ends.
const  userName = "Prakash            Singh  Rathore";
const name1 = userName.trim();
console.log(name1);