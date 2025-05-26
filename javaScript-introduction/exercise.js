// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers
// 
// Exercise Time!
// 
// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

// 1) 세 개의 새로운 변수를 만드세요:
//    - 당신이 선택한 온라인 강좌의 이름을 저장하는 변수
//    - 그 강좌의 가격을 저장하는 변수
//    - 이 강좌를 들으면서 가지는 세 가지 주요 목표를 저장하는 변수
let courseName = "Web Developer Boot Camp";
let coursePrice = 18000;
let goal1 = "HTML 기초";
let goal2 = "CSS 기초";
let goal3 = "JavaScript 기초";
let courseGoals = [goal1, goal2, goal3];

// 2) 세 변수의 값을 "alert"로 출력하세요
console.log(courseName);
console.log(coursePrice);
console.log(courseGoals);

// 3) 세 변수를 "그룹화"해서, 여전히 그 값들을 출력해보세요
let course = {
  name: courseName,
  price: coursePrice,
  mainGoals: courseGoals,
};
console.log(course);

// 4) "주요 목표" 변수의 두 번째 요소도 출력하세요
console.log(course.mainGoals[1]);

// 5) 다음을 수행하는 사용자 정의 명령을 추가하세요:
//    - "주요 목표" 변수를 사용해서 식별자로 요소에 접근하세요
//    - 구체적인 식별자 값은 동적/유연해야 합니다
//      (즉, 명령이 다양한 식별자에 대해 실행될 수 있어야 함)
//    - "주요 목표" 변수도 동적이어야 합니다: 이 명령은 어떤 값의 리스트에도 동작해야 함
//    - 사용자 정의 명령은 접근한 값을 제공해야 합니다 (즉, 리스트 요소)
// function goalsModify(a, b) {
//   return courseGoals[a] = b;
// }
function getListItem(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}
// 6) (5)에서 만든 사용자 정의 명령을 실행하고 결과를 "alert"로 출력하세요
// goalsModify(1, "CSS 중급");
// goalsModify(0, "html 중급");
// goalsModify(2, "JavaScript 중급");
// console.log(courseGoals);

let firstGoal = getListItem(course.mainGoals, 0);
console.log(firstGoal);
let secondGoal = getListItem(course.mainGoals, 1);
console.log(secondGoal);
let thirdGoal = getListItem(course.mainGoals, 2);
console.log(thirdGoal);

let otherGoal = getListItem(courseGoals, 2);
console.log(otherGoal);
