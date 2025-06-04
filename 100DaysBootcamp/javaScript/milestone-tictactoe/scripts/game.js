function ResetGame() {
  //   reset for Game Data

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameFieldElements[gameBoardIndex].textContent = "";
      gameFieldElements[gameBoardIndex].classList.remove("disabled");
      gameBoardIndex = gameBoardIndex + 1;
    }
  }
  activePlayer = 0;
  currentRound = 1;

  gameOverElement.firstElementChild.innerHTML =
    'You won! <span id="winner-name">PLAYER NAME</span>';
  gameOverElement.style.display = "none";
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("please set custom player name for both players!");
    console.log("not input player name");
    return;
  }
  ResetGame();
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectColumn = +selectedField.dataset.col - 1;
  const selectRow = +selectedField.dataset.row - 1;

  if (gameData[selectRow][selectColumn] > 0) {
    alert("빈공간을 클릭해주세요!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectRow][selectColumn] = activePlayer + 1;

  const winnerId = checkforGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
    for (let i = 0; i < 9; i++) {
      gameFieldElements[i].classList.add("disabled");
    }
  }

  currentRound = currentRound + 1;
  switchPlayer();
}

function checkforGameOver() {
  // 같은 행에 값이 있는지 확인
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  // 같은 열에 값이 있는지 확인
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  // 좌측 상단 > 우측 아래 대각선 확인
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[1][1];
  }
  // 우측 상단 > 좌측 아래 대각선 확인
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[1][1];
  }
  //  무승부
  if (currentRound === 9) {
    return -1;
  }
  //   경기 중
  return 0;
}

function endGame(winnerId) {
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "이건 무승부!";
  }
}
