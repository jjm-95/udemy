const defaultResult = 0;

let currentResult = defaultResult;

function getUserInput(){
    return parseInt(userInput.value);
}


function createAndWriteOutput(연산자, 결과전값, 투입값){
    const calcDescription = `${결과전값} ${연산자} ${투입값}`;
    outputResult(currentResult, calcDescription);
}

function add(){
    const enterNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult + enterNumber;
    createAndWriteOutput('+', initialResult, enterNumber);
    
     
}

function subtract(){
    const enterNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - enterNumber;
    createAndWriteOutput('-', initialResult, enterNumber);
     
}

function multiply(){
    const enterNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * enterNumber;
    createAndWriteOutput('*', initialResult, enterNumber);
     
}

function divide(){
    const enterNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / enterNumber;
    createAndWriteOutput('/', initialResult, enterNumber);
     
}

function initalizeResult(){
    currentResult = 0;
    outputResult(currentResult, "back to Zero");
}

addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);

initBtn.addEventListener('click', initalizeResult);