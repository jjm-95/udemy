window.console.log(window);

//alert(); == window.alert();

// the DOM > Document Object Model (문서 객체 모델)
// "자바스크립트로 HTML 구조 안에 있는 요소(객체)들을 선택하고 조작할 수 있게 해주는 구조의 방법, 문법"

console.dir(document);

// document.body.children[1].children[0].href = "https://google.com"; 구조가 변경될 시 에러 발생할 확률이 높음

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

// anchorElement = document.querySelector("#external-link");
anchorElement = document.querySelector("a");
anchorElement.href = "https://naver.com";

// 요소 집어넣기
// 1. 새로운 요소 만들기
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://udemy.com";
newAnchorElement.textContent = " this is leads to Udemy!";

// 2. 새로운 요소를 가지고 있어야 하는 부모 요소에 접근
let firstParagraph = document.querySelector("p");

// 3. 부모요소 컨텐츠에 새로운 요소를 삽입
firstParagraph.append(newAnchorElement);

//요소 제거하기
// 1. 제거할 요소 선택
let firstH1Element = document.querySelector("h1");

// 2. 선택한 요소 제거
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element); // 오래된 브라우저를 사용할 경우

// 요소 이동하기
// let secondParagraph = document.querySelector("p:nth-of-type(2)");
firstParagraph.parentElement.append(firstParagraph);

//요소 변경하기 : innerHTML
console.log(firstParagraph.innerHTML); //html의 요소까지 보여줌
// I'm New!<a href="https://udemy.com"> this is leads to Udemy!</a>

console.log(firstParagraph.textContent); // html요소를 제외한 단순 텍스트 컨텐츠만 보여줌 
// I'm New! this is leads to Udemy!

firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>";