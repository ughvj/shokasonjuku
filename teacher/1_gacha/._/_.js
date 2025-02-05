export const init = () => {
  // すべてのカードのクラスをリセット
  document.querySelectorAll(".card").forEach((card) => {
    card.className = "card";
    card.textContent = card.id.replace("card", "");
  });
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const setRarity = (card, rarity) => {
  card.textContent = `${rarity.toUpperCase()}\n${getRandomEl(rarity)}`;
  card.classList.add(rarity);
};

const loadList = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
};

var list;
loadList().then((d) => {
  list = d.reduce((acc, cur) => {
    return [...acc, cur];
  }, []);
});

const getRandomEl = (rarity) => {
  const filtered = list.filter((e) => e.rarity === rarity);
  return filtered[Math.floor(Math.random() * filtered.length)].name;
};
