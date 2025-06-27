const hobbies = ["Sports", "Cooking"];
const age = 32;

hobbies.push("Reading");

console.log(hobbies);

// Primitive values = number, string, booleans & more (undefined)
// Reference values : Objects, Array

const person = {age: 32};

function getAdultYear(p){
    // let age = p.age;
    // age = age - 18;
    p.age = p.age -18;
    return p.age;
}

// console.log(getAdultYear(person)); // 객체에 직접 접근하기 떄문에 함수를 실행하면 객체값이 변화한다.
console.log(getAdultYear({...person})); // ...연산자 > Spread연산자는 객체를 복사하기 때문에 person 객체에 반영되지 않는다.

console.log(person);
