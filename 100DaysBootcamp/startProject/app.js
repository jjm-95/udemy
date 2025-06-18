const uuid = require("uuid");
const express = require("express");

const fs = require("fs");

const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public")); // 정적인 파일들을(.css ,image ,.js) 클라이언트에게 보내주는 전처리 미들웨어 보내주어야만 서버에서 해당 파일을 link가 가능하다.
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "index.html");
  // res.sendFile(htmlFilePath);

  res.render("index"); //템플릿 엔진을 사용할때 view파일을 호출하는 방법
});

app.get("/restaurants", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
  // res.sendFile(htmlFilePath); // sendFile - html 파일을 건낼 수 있는 함수

  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/restaurants/:id", function (req, res) {
  // :id - 동적인 URL경로를 만들기 위한 식별자 ex) :restaurantID 처럼 다른 파라미터도 가능
  const restaurantId = req.params.id; // 동적 경로를 변수로 할당

  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", {restaurant: restaurant});
    }
  }
  res.status(404).render("404");
});

app.get("/recommend", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "recommend.html");
  // res.sendFile(htmlFilePath); // sendFile - html 파일을 건낼 수 있는 함수
  res.render("recommend");
});

app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect("/confirm");
});

app.get("/confirm", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "confirm.html");
  // res.sendFile(htmlFilePath); // sendFile - html 파일을 건낼 수 있는 함수
  res.render("confirm");
});

app.get("/about", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "about.html");
  // res.sendFile(htmlFilePath); // sendFile - html 파일을 건낼 수 있는 함수
  res.render("about");
});

app.use(function(req, res){
  res.status(404).render("404");
});

app.use(function(error, req, res, next){
  res.status(500).render("500");
});

app.listen(3000);
