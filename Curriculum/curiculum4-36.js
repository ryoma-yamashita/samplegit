// function functionTest() {
//   // ここに処理を書いていきます。
// };

// function showAlert() {
//   alert("functionTestが実行されました。")
// };
// showAlert()

var getText = function () {
  return "getTextが実行されたのでこのテキストを返します。"
};

console.log(getText());

var getText = function () {
  var text = "getTextが実行されたのでこのテキストを返します。"
  console.log(text);
};

console.log(getText());

function showAlert() {
  alert("警告文を表示します！")
};

showAlert();

var addNum = function () {
  return 5 + 5;
}

console.log(addNum());

// スコープとは...
// 変数がどの場所から参照できるのかを定義する概念。
// 言い換えると、変数の有効範囲のこと。
// スコープがあることでプログラム内で同じ名前の変数が存在しても、スコープが違うと別物として扱われる。
// そのため変数名の競合を避けることができる。
// また、スコープがあることで、関数の実行が終了した変数が不要とみなされ、無駄なメモリ消費を避けることができる。
