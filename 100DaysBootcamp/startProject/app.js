const fs = require("fs");
const path = require("path");

const uuid = require("uuid");
const express = require("express");


const defaultRoutes = require("./routes/default");
const restaurantRoutes = require("./routes/restaurants");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public")); // 정적인 파일들을(.css ,image ,.js) 클라이언트에게 보내주는 전처리 미들웨어 보내주어야만 서버에서 해당 파일을 link가 가능하다.
app.use(express.urlencoded({ extended: false }));

app.use("/", defaultRoutes);
app.use("/", restaurantRoutes);

app.use(function (req, res) {
  res.status(404).render("404");
});

app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

app.listen(3000);
