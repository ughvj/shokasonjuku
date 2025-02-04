document.addEventListener("DOMContentLoaded", () => {
  const reelSelects = document.querySelectorAll(".reel-select");

  reelSelects.forEach((select) => {
    // 初期選択位置を設定
    select.selectedIndex = 4;
  });

  function updateAllValues() {
    const values = Array.from(reelSelects)
      .map((select) => select.value)
      .join("-");
    document.getElementById("selectedValues").textContent = values;
  }

  window.changeValue = function (reelIndex, direction) {
    const select = reelSelects[reelIndex];
    const currentIndex = select.selectedIndex;
    const newIndex = currentIndex - direction;

    if (newIndex >= 0 && newIndex < select.options.length) {
      select.selectedIndex = newIndex;
      const itemHeight = 50;
      select.scrollTop = newIndex * itemHeight;
      updateAllValues();
    }
  };

  reelSelects.forEach((select, index) => {
    select.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        changeValue(index, 1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        changeValue(index, -1);
      }
    });

    select.addEventListener("change", updateAllValues);
  });

  // 初期値を表示
  updateAllValues();
});

const reel1 = document.querySelector('[data-reel-id="1"]');
const reels = reel1.querySelectorAll(".control-button");
reels.forEach((e) => {
  e.addEventListener("click", () => changeValue(0, 1));
});
const reel2 = document.querySelector('[data-reel-id="2"]');
const reel3 = document.querySelector('[data-reel-id="3"]');
const reel4 = document.querySelector('[data-reel-id="4"]');
