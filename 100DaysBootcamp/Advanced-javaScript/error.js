const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("data.json");
  } catch (error) {
    console.log("An error Occurred");
    console.log(error.message);
  }
  console.log("hi there!");
}
// try - catch 구문
// 오류가 발생할 수 있는 코드로 인해 전체적인 프로그램의 shut down을 막아낼 수 있는 구문, 에러 발생 시 어떤 코드가 잘못되었는지 자세하게 잡아 낼 수 있음
readFile();

