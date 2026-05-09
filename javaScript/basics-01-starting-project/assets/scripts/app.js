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

function add() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + enterNumber;
  createAndWriteOutput('+', initialResult, enterNumber);
  writeToLog('ADD', initialResult, enterNumber, currentResult);
  console.log(logEntries);
}

function subtract() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - enterNumber;
  createAndWriteOutput('-', initialResult, enterNumber);
  writeToLog('SUBRACT', initialResult, enterNumber, currentResult);
  console.log(logEntries);
}

function multiply() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enterNumber;
  createAndWriteOutput('*', initialResult, enterNumber);
  writeToLog('MULTIPLY', initialResult, enterNumber, currentResult);
  console.log(logEntries);
}

function divide() {
  const enterNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enterNumber;
  createAndWriteOutput('/', initialResult, enterNumber);
  writeToLog('DIVIDE', initialResult, enterNumber, currentResult);
  console.log(logEntries);
}

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
