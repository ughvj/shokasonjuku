export const player_preference = {
  JUMP_POWER: 9, // 数字が大きいほど、ジャンプが高くなる
  GRAVITY: 0.8, // 数字が小さいほど、重力が弱くなる
  MOVE_SPEED: 3, // 数字が大きいほど、ネコが速くなる

  NEZUMI_FREQ: 10, // 数字が小さいほど、ネズミがたくさん出てくる
  NEZUMI_SPEED: 7, // 数字が大きいほど、ネズミのスピードが速くなる

  SAKANA_FREQ: 20, // 数字が小さいほど、サカナがたくさん出てくる
  SAKANA_SPEED: 4, // 数字が大きいほど、サカナのスピードが速くなる

  ON_TIMER: false, // タイマーを有効化したい場合は「true」
  TIMER: 10, // タイマーが有効である場合、タイマーの時間をセット(秒単位)

  SOUND: true, // 音を出さない場合は「false」
};

export const gameclear = (sakana, nezumi) => {
  // ここにゲーム成功の条件を記述する
  // ゲームを成功させたい時は、trueを返すようにすれば良い
  // ゲームを続行させたい時は、falseを返すようにすれば良い
  // sakana: 取得したサカナの数
  // nezumi: 取得したネズミの数
  // console.log(`${sakana}, ${nezumi}`);

  if (sakana > 5) {
    return true;
  }
  return false;
};

export const gameover = (sakana, nezumi) => {
  // ここにゲーム失敗の条件を記述する
  // ゲームを失敗させたい時は、trueを返すようにすれば良い
  // ゲームを続行させたい時は、falseを返すようにすれば良い
  // sakana: 取得したサカナの数
  // nezumi: 取得したネズミの数

  if (nezumi > 5) {
    return true;
  }

  return false;
};

export const timeover = (sakana, nezumi) => {
  // タイマーが0になった時の条件を記述する
  // ゲームを成功させたい時は、trueを返すようにすれば良い
  // ゲームを失敗させたい時は、falseを返すようにすれば良い
  // sakana: 取得したサカナの数
  // nezumi: 取得したネズミの数

  return false;
};
