const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    alert('게임 끝!');
  } else {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);

    currentMonsterHealth = currentMonsterHealth - damage;
    currentPlayerHealth = currentPlayerHealth - playerDamage;

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
      alert('너 이김!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
      alert('너 짐');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
      alert('무승부');
    }
  }
}

attackBtn.addEventListener('click', attackHandler);
