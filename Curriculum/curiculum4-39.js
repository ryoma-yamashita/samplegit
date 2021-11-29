const teacher = {
  //プロパティー
  name:"太郎",
  //プロパティー
  subject:"国語",
  //メソッド
  profile: function () {
    console.log("担当教科は国語です");
  }
};

teacher.profile();

function sumNum(x) {
  const result = x + 1;
  console.log(result);
};

sumNum(5);

function sumNum2(x, y) {
  const result = x + y;
  console.log(result);
};

sumNum2(5, 10);

function showText(x) {
  console.log(x);
};

showText('引数')

function tomato(price, func) {
  const name = "トマト";
  func(name, price);
};

const price = function price(name, price) {
  console.log(name + "の値段は" + price + "円です。");
}

tomato(100, price);

// プロパティーとメソッド
// プロパティー...オブジェクトの状態や特性を表す情報のこと、keyにvalueを割り当てたもの
// メソッド...オブジェクトに関連付けされた関数のこと、プロパティーのvalue部分に関数を割り当てたもの

const obj = {
  myName: "Ryoma.",
  // myNameがkey: "Ryoma."がvalue: この1行がプロパティー
  showText: function() {
    console.log("Hello World!");
  },
  // showTextのkeyにfunctionを使った関数を割り当てたもの: この部分がメソッド
  greet: function () {
    console.log("I'm " + this.myName);
  },
  learn: function () {
    console.log("learnning JavaScript.");
  }
};

obj.showText();
obj.greet();
obj.learn();

// 2
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};

const result = fruit("ブドウ", 398);
console.log(result);

// 3
function addTax(price, func) {
  // priceは値段
  // funcは実行する関数名
  // 税込み価格を計算し四捨五入して整数にしている
  const taxPrice = Math.round(price * 1.10);
  // console.log(func + "の値段は" + taxPrice + "円です。");
  func(taxPrice,foodName);
  return taxPrice
};

// トマトの税込み価格をコンソールに表示させる処理
let foodName = function foodName(taxPrice, foodName) {
  foodName = "トマトの値段は";
  console.log(foodName + taxPrice + "円です。");
}
addTax(300, foodName)
// 玉ねぎの税込み価格をコンソールに表示させる処理
foodName = function foodName(taxPrice, foodName) {
  foodName = "玉ねぎの値段は";
  console.log(foodName + taxPrice + "円です。");
}
addTax(500, foodName)
