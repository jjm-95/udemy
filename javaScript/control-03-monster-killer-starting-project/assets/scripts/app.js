const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

let currentHealAmount = 2;
healAmount.value = currentHealAmount;
healAmount.innerText = healAmount.value;

let currentStrongAttackAmount = 3;
strongAttackAmount.value = currentStrongAttackAmount;
strongAttackAmount.innerText = strongAttackAmount.value;

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth = currentPlayerHealth - playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('너 이김!');
    document.getElementById('monster').style.textDecoration = 'line-through';
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('너 짐');
    document.getElementById('player').style.textDecoration = 'line-through';
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('무승부');
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
