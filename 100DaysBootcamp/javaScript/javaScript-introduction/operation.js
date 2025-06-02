
console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log(10 % 4); // 10 / 4 = 2 > 나머지 = 2
console.log(10 % 3); // 10 / 3 = 3 > 나머지 = 1

console.log((10 + 3 - 5) * 10);

let result = (10 + 3 - 5) * 10;
result = 10 * 4;
result = result + 1;

result++; // result = result + 1
result--; // result = result - 1

result += 5; // result = result + 5
result -= 5; // result = result - 5
result /= 5; // result = result / 5
result *= 5; // result = result * 5

console.log(result);

console.log("Max" + "sch"); // concat
console.log("Max" - "sch"); // NaN => Not a Number 

let userName = "Max";
console.log(userName.length); // 글자 수
console.log(userName.toUpperCase());

let arr = [1,2,3,4,5,6,7,8,9]; 
console.log(arr.length); // 배열의 크기
