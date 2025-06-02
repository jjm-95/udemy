// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

// 배운 내용을 연습해보세요!

// 1) 두 개의 <button> 요소를 선택해서 각각 다른 변수에 저장하세요.
//    - 첫 번째 버튼은 "id"를 추가하거나 사용하지 않고 선택하세요.
const firstBtn = document.querySelector("button");

//    - 두 번째 버튼은 "id"를 사용해서 선택하세요.
const secondBtn = document.getElementById("secondBtn");

// 2) 두 버튼 모두에 "click" 이벤트 리스너를 추가하세요 (서로 다른 함수로).
//    함수에서는 클릭된 버튼을 "console.dir()"로 출력하세요.
//    - 첫 번째 버튼은 저장한 변수를 사용해서 출력하세요.
function firstClick(){
    console.dir(firstBtn);
}
firstBtn.addEventListener("click", firstClick);

//    - 두 번째 버튼은 저장한 변수를 사용하지 않고 출력하세요.
function secondClick(event){
    console.dir(event.target);
}
secondBtn.addEventListener("click",secondClick);

// 3) 페이지에 보이는 텍스트에서 언급된 단락(첫 번째와 세 번째 단락)을 선택해서 저장하세요.
//    - 문서를 탐색하여 두 단락 모두를 선택하세요.
//    - DOM 탐색이 어렵다면 "id"를 사용해도 되지만, 해설을 참고하세요!
const firstParagraph = document.body.childNodes[5].childNodes[3];
const thirdParagraph = document.body.childNodes[5].childNodes[7];

// 4) (2)에서 만든 함수들을 수정해서 다음을 수행하세요:
//    - 첫 번째 버튼은 세 번째 단락(<p>, 버튼 바로 앞에 있는 것)을 제거하세요.
function removeParagraph(){
    // thirdParagraph.remove();
    // thirdParagraph.style.display = "none";
    thirdParagraph.className = "hide";
    console.dir(firstBtn);
}
firstBtn.addEventListener("click", removeParagraph);

//    - 두 번째 버튼은 첫 번째 단락의 배경색을 파란색으로 변경하세요.
function changeBackgroundColor(event){
    // firstParagraph.style.background = "blue";
    firstParagraph.className = "makeBlue";
    console.dir(event.target);
}
secondBtn.addEventListener("click",changeBackgroundColor);


// 5) (4)를 "인라인 스타일"을 변경하는 방법과 CSS 클래스를 추가하는 방법 모두로 해결하세요.
//    참고: CSS 클래스를 먼저 styles.css 파일에 추가해야 합니다!

