import { checkHitAndBlow, debugMode } from "../script.js";

export const init = (guessCallbackfn) => {
  document.addEventListener("DOMContentLoaded", () => {
    const reelSelects = document.querySelectorAll(".reel-select");

    reelSelects.forEach((select) => {
      select.selectedIndex = 4;
    });
  });

  const reels = document.querySelectorAll("[data-reel-id]");
  reels.forEach((reel) => {
    reel.querySelectorAll(".control-button").forEach((btn, i) => {
      btn.addEventListener("click", () =>
        i == 1
          ? countdown(reel.getAttribute("data-reel-id"))
          : countup(reel.getAttribute("data-reel-id"))
      );
    });
  });

  document.getElementById("guess").addEventListener("click", () => {
    displayInfo(guessCallbackfn);
  });
  generateAnswer();
};

const getGuessNumber = () => {
  const reels = document.querySelectorAll(".reel-select");
  var digits = 0;
  reels.forEach((reel) => {
    digits = digits * 10 + Number(reel.value);
  });
  return digits;
};

const countup = (reelIndex) => {
  const reels = document.querySelectorAll(".reel-select");
  const target = reels[reelIndex - 1];
  const cur = target.selectedIndex;
  target.selectedIndex = cur + 1 == 9 ? 0 : cur + 1;
};

const countdown = (reelIndex) => {
  const reels = document.querySelectorAll(".reel-select");
  const target = reels[reelIndex - 1];
  const cur = target.selectedIndex;
  target.selectedIndex = cur - 1 == -1 ? 8 : cur - 1;
};

var answer = 0;
const generateAnswer = () => {
  answer = 0;
  const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  for (var i = 0; i < 4; i++) {
    answer = answer * 10 + rand(1, 9);
  }
};

const getAnswerNumber = () => {
  return answer;
};

var challenge_num = 1;
var over = false;
var infomsg = "";

const displayInfo = (guessCallbackfn, isDebug) => {
  if (over) {
    generateAnswer();
    challenge_num = 1;
    over = false;
    infomsg = "";

    document.getElementById("guess").textContent = "GUESS";
    document.getElementById(
      "slot-info"
    ).textContent = `チャレンジ${challenge_num}`;
    document.getElementById("slot-led-display").innerHTML = `
ヌメロンへようこそ！<br><br>
秘密の4ケタの数字を当てるゲームです！<br>
まずは4ケタの数字を適当に決めて、<br>
GUESSボタンを押してみましょう！`;

    return;
  }

  const result = guessCallbackfn(getAnswerNumber(), getGuessNumber());

  var tmpmsg = "";
  if (challenge_num == 1) {
    document.getElementById("slot-led-display").innerHTML = "";
    tmpmsg = `
<br><br>--- チュートリアル ---<br><br>
「HIT」とは、<br>「ケタ」と「数字」の両方正解している数のことです
<br>「BLOW」とは、<br>「数字」のみ正解している数のことです<br>
<br><br> 例: 答えが「2131」で、「5211」と入力した場合<br>
「1 HIT / 2 BLOW」となります<br><br>
入力した1ケタ目の1は、数字もケタも正解しているため1HIT<br>
入力した2ケタ目の1は、答えの3ケタ目に1があるため1BLOW<br>
入力した3ケタ目の2は、答えの4ケタ目に2があるため1BLOW<br>
入力した4ケタ目の5は、答えに存在しないため何もありません<br><br>
15チャレンジまでに正解できないとゲームオーバー！<br>
さあ、頑張って正解の数字を探してみてください！
`;
  }

  infomsg += debugMode
    ? `
チャレンジ${challenge_num} ${getGuessNumber()} ==> 
${result.hit} HIT / ${result.blow} BLOW (${getAnswerNumber()})<br>
`
    : `
チャレンジ${challenge_num} ${getGuessNumber()} ==> 
${result.hit} HIT / ${result.blow} BLOW<br>
`;

  challenge_num++;

  if (result.hit == 4) {
    infomsg += `<br>正解！<br>もう一度プレイする場合はREPLAYボタンを押してください！<br>`;
    document.getElementById("guess").textContent = "REPLAY";
    over = true;
  } else if (challenge_num == 16) {
    infomsg += `
<br>失敗！答えは「${getAnswerNumber()}」でした！<br>
もう一度プレイする場合はREPLAYボタンを押してください！<br>`;
    document.getElementById("guess").textContent = "REPLAY";
    over = true;
  } else {
    document.getElementById(
      "slot-info"
    ).textContent = `チャレンジ${challenge_num}`;
  }

  document.getElementById("slot-led-display").innerHTML = `${infomsg}${tmpmsg}`;
};

init(checkHitAndBlow);
