const fs = require("fs"); // require < import와 비슷한 함수
const path = require("path");


const filePath = path.join(__dirname, "..","data", "restaurants.json");

function getStoredRestaurants() {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

function storeRestaurants(storableRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
  //다른 파일에서 사용할 수 있는 함수를 내보내는 객체 형식
  getStoredRestaurants: getStoredRestaurants,
  storeRestaurants: storeRestaurants,
};
