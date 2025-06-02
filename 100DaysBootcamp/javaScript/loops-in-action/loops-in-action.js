// first Example : 숫자 더하기

// let sumArray = [1, 2, 3, 4, 5];
// let sum = 0;
// for (const sumThis of sumArray) {
//   sum = sum + sumThis;
//   console.log(sum);
// }

const calculateSumButtonElement = document.querySelector("#calculator button");
const calculateSumInputElement = document.querySelector("#user-number");
const calculateSumParagraphElement = document.querySelector(".output");

let btnSumArray = [];
function calculateSum() {
  let sumUpToNumber = 0;
  const goalNumber = calculateSumInputElement.valueAsNumber;
  for (let i = 0; i <= goalNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }
  console.log(sumUpToNumber);
  calculateSumParagraphElement.textContent = sumUpToNumber;
  calculateSumParagraphElement.style.display = "block";
  // 0부터 기입된 값까지의 1씩 더하여 나오는 값을 추가하는 기능

  // btnSumArray.push(calculateSumInputElement.valueAsNumber);
  // console.log(btnSumArray);
  // for (const sumThis of btnSumArray) {
  //   sumUpToNumber = sumUpToNumber + sumThis;
  // }
  // console.log(sumUpToNumber);
  // calculateSumParagraphElement.textContent = sumUpToNumber;
  // calculateSumParagraphElement.style.display = "block";
  // 눌렀을 시 저장된 값을 추가하는 기능
}

calculateSumButtonElement.addEventListener("click", calculateSum);

// HightLight links

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

const AnchorElements = document.querySelectorAll("#highlight-links a");

function highlightLinks() {
  for (const i of AnchorElements) {
    console.log(i);
    i.classList = "highlight";
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// 유저 데이터 표시하기

const dummyUserData = {
  firstName: "max",
  lastName: "hearts",
  age: 32,
  Gender: "male",
};

const displayDataButtonElement = document.querySelector("#user-data button");
const dataOutputElement = document.querySelector("#output-user-data");
function displayData() {
  for (const i in dummyUserData) {
    const containContents = document.createElement("li");
    containContents.innerHTML = i.toUpperCase() + ": " + dummyUserData[i];
    console.log(i + dummyUserData[i]);
    dataOutputElement.append(containContents);
  }
}

displayDataButtonElement.addEventListener("click", displayData);

// 특정 숫자가 나올때까지 반복하기

const targetNumberInputElement = document.querySelector("#user-target-number");
const diceRollButtonElement = document.querySelector("#statistics button");

function rollDice() {
  let randomDiceNumber = Math.floor(Math.random() * 6) + 1;

  return randomDiceNumber;
}

function targetNumberRoll() {
  const target = targetNumberInputElement.valueAsNumber;
  const diceRollsListElement = document.getElementById("dice-rolls");
  diceRollsListElement.innerText = "";
  const totalRollsElement = document.getElementById("output-total-rolls");
  const targetNumberElement = document.getElementById("output-target-number");

  console.log(target);
  let matchedTargetNumber = false;

  let rollTimes = 0;

  while (!matchedTargetNumber) {
    const rollNumber = rollDice();
    rollTimes++;
    console.log(target + ":" + rollNumber + "/" + rollTimes);

    const containsContents = document.createElement("li");
    containsContents.innerText = target + ":" + rollNumber + "/" + rollTimes;
    diceRollsListElement.append(containsContents);

    if (rollNumber == target) {
      matchedTargetNumber = true;
      console.log(rollTimes + " times rolled");

      totalRollsElement.innerText = rollTimes;
      targetNumberElement.innerText = target;
    }
  }

  // while 조건문은 flag 타입을 이용해야 무한계산을 막기 쉽다.
}

diceRollButtonElement.addEventListener("click", targetNumberRoll);
