export const checkHitAndBlow = (answer, guess) => {
  // 配列に直す
  var answer_array = [0, 0, 0, 0].map(() => {
    const digit = answer % 10;
    answer = Math.floor(answer / 10);
    return digit;
  });
  var guess_array = [0, 0, 0, 0].map(() => {
    const digit = guess % 10;
    guess = Math.floor(guess / 10);
    return digit;
  });

  // 先にhitを見る必要がある
  const hitlog = [false, false, false, false].map((_, i) => {
    return answer_array[i] == guess_array[i];
  });

  // hitしたケタを取り除く
  answer_array = answer_array.filter((_, i) => {
    return !hitlog[i];
  });
  guess_array = guess_array.filter((_, i) => {
    return !hitlog[i];
  });

  // 次にblowを確認する
  guess_array.forEach((g) => {
    const idx = answer_array.indexOf(g);
    // 検索できた = blowした　なので、answer_arrayからそれを取り除く
    if (idx >= 0) {
      answer_array = answer_array.filter((ans, i) => {
        return idx != i;
      });
    }
  });

  return {
    hit: 4 - guess_array.length,
    blow: guess_array.length - answer_array.length,
  };
};

export const debugMode = true;
