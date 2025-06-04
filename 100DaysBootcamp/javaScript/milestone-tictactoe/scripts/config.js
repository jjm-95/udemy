function openPlayerConfig(event) {
  const clickedButton = +event.target.dataset.playerid; 
  //dataset < 타겟된 요소 안에 있는 data속성을 가져온다. data-playerid:데이터 
  editPlayer = clickedButton;
  playConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
  // console.log(clickedButton);
}

function closePlayerConfig() {
  playConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formInputElement.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target); 
  //formData라는 자바 기본 탑재 클래스를 인스턴스 : formData의 get함수로 input 내 data를 뽑아올 수 있다.
  const enteredPlayername = formData.get("username").trim(); 
  // trim : 문자열 관련 함수에 사용가능한 공통함수 > 실제내용 앞 뒤의 있는 공백을 잘라내는"TRIM"하는 역할

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Pleases enter a valid name!";
    return;
  }

  // console.log(enteredPlayername);
  const updatePlayerDataElement = document.getElementById('player-'+editPlayer+'-data');
  updatePlayerDataElement.children[1].textContent = enteredPlayername;

  // if(editPlayer === 1){
  //   players[0].name = enteredPlayername;
  // }else {
  //   players[1].name = enteredPlayername;
  // }
  players[editPlayer -1].name = enteredPlayername;

  console.log(players);

  closePlayerConfig();

}
