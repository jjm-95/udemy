let age = 32;
let userName = "Max";
let hobbies = ["Game", "Sports", "Cooking"]; // array(배열) 데이터
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
}; // <<< Json(제이슨) 데이터

// alert(hobbies[0]);
console.log(hobbies);
console.log(job);
console.log(job.title);
console.log(job.place);
console.log(job.salary);

let calYear;

function calculateAdultYears(num) {
  return num - 18;
}

calYear = calculateAdultYears(age);

let adultYear = age - 18;
console.log(adultYear);
// alert(calYear);

age = 45;
adultYear = age - 18;
calYear = calculateAdultYears(age);
console.log(adultYear);
// alert(calYear);

let ages = [30, 40, 50];

// for(let i=0; i<3; i++) {
//     console.log(ages[i]);
// }

// for(let i=0; i<3; i++) {
//     let forAge = calculateAdultYears(ages[i]);
//     console.log(forAge);
// }

let person = {
  name: "Max", // Property (속성)
  greet() {
    console.log("Hello!");
  }, // Method (메서드)
};

person.greet();
