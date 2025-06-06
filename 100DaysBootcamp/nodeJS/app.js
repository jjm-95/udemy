// const userName = "Max";

// console.log(userName);

// node.js의 내장 모듈 중 하나인 http모듈을 불러온다. >> require()
const http = require("http");


// "/currentTime"이란 URL을 호출 시 아래 내용을 수행함 .url
// 응답상태 코드인 200(정상, 성공)으로 설정 >> .statusCode
// 응답으로 Hello World라는 html 코드를 보내고 응답을 종료함 >> .end()
function handleRequest(request, response) {
  // localhost:3000/currentTime을 입력했을 시 동작하는 코드
  if (request.url === "/currentTime") {
    response.statusCode = 200;
    response.end("<h1>Hello World! "+new Date().toISOString()+"</h1>");
  } else if (request.url === "/") {
    // localhost:3000 입력 시 동작하는 코드
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
  }
}

//  handleRequest라는 함수를 사용하는 서버 객채를 생성 >> .createServer()
const server = http.createServer(handleRequest);

//  해당 서버는 3000이란 포트를 사용 >> .listen()
server.listen(3000);
