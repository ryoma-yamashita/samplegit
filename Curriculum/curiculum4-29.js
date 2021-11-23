var boolean = false;
if (boolean) {
  console.log("trueの処理");
  console.log(boolean);
} else {
  console.log("falseの処理");
  console.log(boolean);
}

// var boolean = false;
// if (boolean) {
//   console.log("trueの処理");
//   console.log(boolean);
// }
// 'console.log("テスト")'
// else {
//   console.log("falseの処理");
//   console.log(boolean);
// }

// elseを使用する時の注意点
// if文とelse文の間に別の処理の記述をするとエラーが出てしまう

// JavaScriptで実装した時の確認ポイント
// 正常に実装を確認することと同時にコンソールにエラー表示が出ていないか確認をする

var number = 1234;
if (number === 1111) {
  console.log(number);
} else {
  console.log(number);
};

var text = "Hello Javascript."
if (text === "Hello world.") {
  console.log(text);
} else {
  console.log(text);
};