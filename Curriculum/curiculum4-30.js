var num = 20;
if (num == 10) {//条件A
  console.log("条件Aの処理");
  console.log(num);
} else if (num == 20) {//条件B
  console.log("条件Bの処理");
  console.log(num);
} else {//条件Aと条件Bに当てはまらなかった時の処理
  console.log("条件Aと条件B以外の処理");
};

var text = "Hello JavaScript.";
if (text === "Hello World.") {
  console.log(text);
} else if (text === "Hello JavaScript.") {
  console.log(text);
} else {
  console.log(text);
};