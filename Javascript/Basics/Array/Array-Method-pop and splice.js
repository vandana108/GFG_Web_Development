
let courses = ["html", "CSS", "JS", "React", "Node", "Python", "SQL"];
console.log("Courses-: ", courses);
let removedItem = courses.pop()
console.log(courses);

//slice, splice

let new_Courses = ["html", "CSS", "Jquery", "OS", "Cyber security"];
let value = new_Courses.slice(1,3);
console.log(value);

//let learn about splice() method
console.log(`Let's learn about splice() method`)
let country = ['India', 'USA', 'Germany', 'France', 'Italy'];
// country.splice(1,3);
// country.splice(1,10);
console.log("mk:  "+country);
//Adding elements to an array
country.splice(2,0, 'Russia');
console.log(country);