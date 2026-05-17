const defaultResult = 0;

let currentResult = defaultResult;
let logEntries = [];
const a = { name: 'KIM' };

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(연산자, 결과전값, 투입값) {
  const calcDescription = `${결과전값} ${연산자} ${투입값}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(연산자, initialResult, enterNumber, currentResult) {
  const logEntry = {
    operation: 연산자,
    preResult: initialResult,
    number: enterNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
}

function calculationResult(calType) {
  // 제시된 타입 외 다른 값이 입력되었을때 반환
  if (
    calType !== 'ADD' &&
    calType !== 'SUBTRACT' &&
    calType !== 'MULTIPLY' &&
    calType !== 'DIVIDE'
  ) {
    return;
  }

  const enterNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calType === 'ADD') {
    currentResult = currentResult + enterNumber;
    mathOperator = '+';
  } else if (calType === 'SUBTRACT') {
    currentResult = currentResult - enterNumber;
    mathOperator = '-';
  } else if (calType === 'MULTIPLY') {
    currentResult = currentResult * enterNumber;
    mathOperator = '*';
  } else if (calType === 'DIVIDE') {
    currentResult = currentResult / enterNumber;
    mathOperator = '/';
  } else {
    console.log('NOT TYPE IN CALCULATOR');
  }
  createAndWriteOutput(mathOperator, initialResult, enterNumber);
  writeToLog('calType', initialResult, enterNumber, currentResult);
  console.log(logEntries);
}

function add() {
  calculationResult('ADD');
  //   const enterNumber = getUserInput();
  //   const initialResult = currentResult;
  //   currentResult = currentResult + enterNumber;
  //   createAndWriteOutput('+', initialResult, enterNumber);
  //   writeToLog('ADD', initialResult, enterNumber, currentResult);
  //   console.log(logEntries);
}

function subtract() {
  calculationResult('SUBTRACT');
  //   const enterNumber = getUserInput();
  //   const initialResult = currentResult;
  //   currentResult = currentResult - enterNumber;
  //   createAndWriteOutput('-', initialResult, enterNumber);
  //   writeToLog('SUBRACT', initialResult, enterNumber, currentResult);
  //   console.log(logEntries);
}

function multiply() {
  calculationResult('MULTIPLY');
  // const enterNumber = getUserInput();
  // const initialResult = currentResult;
  // currentResult = currentResult * enterNumber;
  // createAndWriteOutput('*', initialResult, enterNumber);
  // writeToLog('MULTIPLY', initialResult, enterNumber, currentResult);
  // console.log(logEntries);
}

function divide() {
  calculationResult('DIVIDE');
  // const enterNumber = getUserInput();
  // const initialResult = currentResult;
  // currentResult = currentResult / enterNumber;
  // createAndWriteOutput('/', initialResult, enterNumber);
  // writeToLog('DIVIDE', initialResult, enterNumber, currentResult);
  // console.log(logEntries);
}

/**저장된 값을 초기화 시키는 함수 */
function initalize() {
  currentResult = 0;
  outputResult(currentResult, 'Initalized!');
  logEntries = [];
  console.log(logEntries);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
initBtn.addEventListener('click', initalize);
