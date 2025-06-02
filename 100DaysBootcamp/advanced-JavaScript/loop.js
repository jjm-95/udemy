for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["Max", "kim", "lee"];

for (const user of users) {
  console.log(user);
} // for in 구문은 하기 for문과 같은 결과를 가진다.

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

for(const propertyName in loggedInUser){
    console.log(propertyName);
    console.log(loggedInUser[propertyName]); //loggedInUser 객체의 name, age, isAdmin을 찾는다.
}

let isFinished = false;

while (!isFinished){
    isFinished = confirm("Do you want to quit?");
    // okay == true, canlcel == false
}

console.log("done!");