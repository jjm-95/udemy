const express = require("express");

const path = require("path");

const app = express();

app.use(express.static("public")); // 정적인 파일들을(.css ,image ,.js) 클라이언트에게 보내주는 전처리 미들웨어 보내주어야만 서버에서 해당 파일을 link가 가능하다.

app.get("/", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "index.html");
  res.sendFile(htmlFilePath);
});

app.get("/restaurants", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
  res.sendFile(htmlFilePath); // sendFile - html 파일을 건낼 수 있는 함수
});

app.get("/recommend", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "recommend.html");
  res.sendFile(htmlFilePath); // sendFile - html 파일을 건낼 수 있는 함수
});

app.get("/confirm", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "confirm.html");
  res.sendFile(htmlFilePath); // sendFile - html 파일을 건낼 수 있는 함수
});

app.get("/about", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "about.html");
  res.sendFile(htmlFilePath); // sendFile - html 파일을 건낼 수 있는 함수
});


app.listen(3000);
