// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice
// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice


// 연습 시간!
//
// 1. DOM을 "탐색(drilling)"하여 <h1> 요소를 선택하고
//    원하는 이름의 변수에 저장하세요.
let drillingH1 = document.body.children[0];
console.dir(drillingH1);

// 2. (1)번에서 저장한 변수를 사용하여 <h1> 요소의 "부모"
//    요소(즉, <body> 요소)에 접근하세요.
//    보너스: (1)번에서 저장한 변수를 사용하여
//    형제 요소(즉, <h1> 옆에 있는 <p> 요소)에 접근해보세요.
console.log(drillingH1.parentElement);
console.log(drillingH1.nextElementSibling);

// 3. getElementById를 사용하여 <h1> 요소를 선택하고
//    같은 변수 또는 새로운 변수에 저장하세요(선택 사항).
let h1GetByID = document.getElementById("h1Element");

// 4. querySelector를 사용하여 두 번째 <p> 요소를 선택하고
//    새로운 변수에 저장하세요(HTML 코드에 클래스 등을 추가해야 할 수도 있음).
let pGetQuery = document.querySelector("p:nth-of-type(2)");

// 5. 보너스 과제: (4)번에서 선택한 <p> 요소의 텍스트 내용을
//    원하는 다른 텍스트로 변경해보세요.
console.dir(pGetQuery);
pGetQuery.innerText = "This is My Exercise!"
// pGetQuery.innerHTML = "This is <a id='external-link' href='https://naver.com' target='blank'> Exercise</a>";