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
  btnSumArray.push(calculateSumInputElement.valueAsNumber);
  console.log(btnSumArray);
  for (const sumThis of btnSumArray) {
    sumUpToNumber = sumUpToNumber + sumThis;
  }
  console.log(sumUpToNumber);
  calculateSumParagraphElement.textContent = sumUpToNumber;
  calculateSumParagraphElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);
