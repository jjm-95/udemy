const express = require("express");

const resData = require("../util/restaurant-data");

const router = express.Router();

router.get("/restaurants", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
  // res.sendFile(htmlFilePath); // sendFile - nodejs에서의 html 파일을 건낼 수 있는 함수, express에선 render로 대체

  let order = req.query.order; // url의 있는 ?xxx=aaa 와 같은 쿼리값을 불러온다.
  let nextOrder = "desc";

  if (order !== "asc" && order !== "desc") {
    order = "asc";
  }

  if (order === "desc" ) {
    nextOrder = "asc";
  }

  const storedRestaurants = resData.getStoredRestaurants();

  storedRestaurants.sort(function (resA, resB) {
    if (order === "asc" && resA.name > resB.name) {
      return 1;
    } else if (order === "desc" && resB.name > resA.name) {
      return -1;
    }
  }); // 데이터를 정렬하는 함수

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder,
  });
});

router.get("/restaurants/:id", function (req, res) {
  // :id - 동적인 URL경로를 만들기 위한 식별자 ex) :restaurantID 처럼 다른 파라미터도 가능
  const restaurantId = req.params.id; // 동적 경로를 변수로 할당

  const storedRestaurants = resData.getStoredRestaurants();

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }
  res.status(404).render("404");
});

router.get("/recommend", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "recommend.html");
  // res.sendFile(htmlFilePath); // sendFile - html 파일을 건낼 수 있는 함수
  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const restaurants = resData.getStoredRestaurants();

  restaurants.push(restaurant);

  resData.storeRestaurants(restaurants);

  res.redirect("/confirm");
});

router.get("/confirm", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "confirm.html");
  // res.sendFile(htmlFilePath); // sendFile - html 파일을 건낼 수 있는 함수
  res.render("confirm");
});

module.exports = router;
