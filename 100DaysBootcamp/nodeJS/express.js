const fs = require("fs"); //file system이란 패키지를 호출하는 방법
const path = require("path"); // 파일 경로를 위한 패키지

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
// app.use - 특정 함수를 실행 전 먼저 실행시켜야 할 함수를 정의하는 함수, urlencode - post된 데이터를 자바 스크립트가 읽을 수 있게 오브젝트 데이터로 변환해서 req.body에 담아주는 함수

//get 요청이 들어왔을때 수행할 핸들러를 정의
app.get("/currenttime", function (request, response, next) {
  //익명함수 사용
  response.send("<h1>Hello World! " + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime

app.get("/", function (req, res) {
  // get 요청 시 실행할 함수
  res.send(
    "<form action='/store-user' method='POST'><label>Your Name</label><input type='text' name='username'></input><button>Submit</button></form>"
  );
}); // localhost:3000/

app.post("/store-user", function (req, res) {
  // post 요청시 실행할 함수
  const userName = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json"); // join함수 - 인자로 받은 경로를 하나로 합쳐 문자열의 형태로 Path를 리턴하는 함수

  const fileData = fs.readFileSync(filePath); // 기존에 있던 파일을 읽는 함수
  const existingUser = JSON.parse(fileData); // 해당 데이터를 JSON양식의 데이터로 변환 해주는 함수

  existingUser.push(userName); // JSON 데이터 내 userName 데이터를 집어넣음 - 내용 교체가 아닌 추가로 넣어줌

  fs.writeFileSync(filePath, JSON.stringify(existingUser)); // 해당 경로에 원하는 내용을 쓰기 할 수 있는 함수 , JSON.stringify() - 해당파일을 다시 쓰기 가능하도록 텍스트로 변환

  console.log(userName);
  res.send("<h1>Username 저장!</h1><p>" + userName + "<p>");
});

app.get("/user-list", function (req, res) {
  // res.send("<h1>유저 리스트</h1>");
  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUser = JSON.parse(fileData);

  let responseData = `
  <h1>User List</h1>
  <ul>
  `;

  for (const user of existingUser) {
    responseData += "<li>" + user + "</li>";
  }

  responseData += "</ul>";

  res.send(responseData); //res.send는 함수에서 한번만 사용 가능하다. 아니면 에러 발생
});

app.listen(3000);
