export const checkHitAndBlow = (answer, guess) => {
  /**
   * ヌメロンの、HitとBlowを判定するプログラムを作成しましょう！
   * 引数のanswerには答えの数字4ケタ、
   * guessには入力された数字4ケタが、
   * どちらも整数型で入力されます。
   *
   * 返却値のhitにはhit数、blowにはblow数を設定すればOKです。
   * 初期の状態ではどちらも0が設定されています。
   */

  return {
    hit: 0,
    blow: 0,
  };
};

/**
 * デバッグモードをtrueにしていると、
 * 値を推測するたびに答えをカンニングできます！
 * しっかり遊びたい時はfalseに設定しましょう。
 */
export const debugMode = true;
