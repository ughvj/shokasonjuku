import { init, getRandomInt, setRarity } from "./_/_.js";

const ssr_prob = 3;
const sr_prob = 10;
const r_prob = 30;

document.getElementById("ssr_prob").textContent = `SSR: ${ssr_prob}%`;
document.getElementById("sr_prob").textContent = `SR: ${sr_prob}%`;
document.getElementById("r_prob").textContent = `R: ${r_prob}%`;
document.getElementById("n_prob").textContent = `N: ${
  100 - ssr_prob - sr_prob - r_prob
}%`;

document.getElementById("gacha").addEventListener("click", function () {
  init();

  for (var i = 1; i <= 10; i++) {
    const rand = getRandomInt(1, 100);
    const card = document.getElementById(`card${i}`);

    if (rand <= ssr_prob) {
      setRarity(card, "ssr");
    } else if (rand <= ssr_prob + sr_prob) {
      setRarity(card, "sr");
    } else if (rand < ssr_prob + sr_prob + r_prob) {
      setRarity(card, "r");
    } else {
      setRarity(card, "n");
    }
  }
});
