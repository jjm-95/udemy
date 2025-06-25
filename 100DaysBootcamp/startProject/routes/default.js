const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("index"); //템플릿 엔진을 사용할때 view파일을 호출하는 방법
});

router.get("/about", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "about.html");
  // res.sendFile(htmlFilePath); // sendFile - html 파일을 건낼 수 있는 함수
  res.render("about");
});


module.exports = router;