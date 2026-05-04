const defaultResult = 0;

let currentResult = defaultResult;

function getUserInput(){
    return parseInt(userInput.value);
}

function add(){
    const enterNumber = getUserInput();
    const calcDescription = `${currentResult} + ${enterNumber}`;
    currentResult = currentResult + enterNumber;
    outputResult(currentResult, calcDescription);
     
}

addBtn.addEventListener('click', add);
