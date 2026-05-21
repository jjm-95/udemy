const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

const eneterdValue = prompt('최대 생명을 고르시오', '100');
let chosenMaxLife = parseInt(eneterdValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

const HEAL_VALUE = chosenMaxLife / 5;
let currentHealAmount = 2;
healAmount.value = currentHealAmount;
healAmount.innerText = healAmount.value;

let currentStrongAttackAmount = 3;
strongAttackAmount.value = currentStrongAttackAmount;
strongAttackAmount.innerText = strongAttackAmount.value;

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  hasBonusLife = true;
  currentHealAmount = 2;
  healAmount.value = currentHealAmount;
  healAmount.innerText = healAmount.value;
  currentStrongAttackAmount = 3;
  strongAttackAmount.value = currentStrongAttackAmount;
  strongAttackAmount.innerText = strongAttackAmount.value;
  document.getElementById('monster').style.textDecoration = 'none';
  document.getElementById('player').style.textDecoration = 'none';
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth = currentPlayerHealth - playerDamage;

  // 체력이 0이 될 경우 보너스생명을 차감해 데미지를 무효화
  if (currentPlayerHealth <= 0 && hasBonusLife === true) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('얼방 생성!');
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    document.getElementById('monster').style.textDecoration = 'line-through';
    alert('너 이김!');
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    document.getElementById('player').style.textDecoration = 'line-through';
    alert('너 짐');
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('무승부');
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;

  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    alert('게임 끝!');
    reset();
  } else {
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth = currentMonsterHealth - damage;
    endRound();
  }
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    alert('게임 끝!');
    reset();
  } else if (currentStrongAttackAmount <= 0) {
    alert('힘 딸림;;');
  } else {
    --currentStrongAttackAmount;
    strongAttackAmount.value = currentStrongAttackAmount;
    strongAttackAmount.innerText = strongAttackAmount.value;
    attackMonster('STRONG_ATTACK');
  }
}

function healPlayerHandler() {
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    // 체력이 한쪽이 0이 된 경우 게임 진행 방지
    alert('게임 끝!');
    reset();
  } else if (currentHealAmount <= 0) {
    // 힐 갯수가 0이 된 경우 힐 방지
    alert('회복 할 수 없슴!');
  } else if (currentPlayerHealth + HEAL_VALUE >= chosenMaxLife) {
    // 최대체력 초과하여 힐 방지
    alert('초과하여 회복 할 수없음');
  } else {
    const healPlayer = increasePlayerHealth(HEAL_VALUE);
    // 힐 진행 시 힐 갯수 업데이트 반영
    currentHealAmount = --currentHealAmount;
    healAmount.value = currentHealAmount;
    healAmount.innerText = healAmount.value;

    currentPlayerHealth = currentPlayerHealth + healPlayer;

    endRound();
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
