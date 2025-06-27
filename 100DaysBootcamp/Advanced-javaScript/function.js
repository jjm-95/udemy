function greetUser(greetingPrefix, userName = "There") {
  // 변수 = "기본값" > 변수값이 입력이 안됐을 시 undefined가 아닌 "기본값"이 나오도록 한다.
  // console.log(greetingPrefix + " " + userName + "!");
  console.log(`${greetingPrefix} ${userName}!`)
}

greetUser("안녕", "전재명");
greetUser("Hello");

function sumUp(...numbers) {
  ///...연산자(spread 연산자) > 파라미터를 제한없이 수용 가능하며 이후 받은 파마리터들은 배열로 봉합한다.
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

const arrayNumbers = [1, 3, 4, 5, 6, 7];

// console.log(sumUp(1,2,3));
console.log(sumUp(211, 3, 4, 5, 6, 7, 8));

console.log(sumUp(...arrayNumbers)); // ... > 배열의 경우 ...연산자를 붙이면 독립된 값으로 전달한다.

console.log(sumUp);
