var numA = 20;
var numB = 40;
if (numA == 20 && numB == 40) {
  console.log("ANDの条件と一致した処理");
  console.log(numA == 20 && numB == 40);
} else {
  console.log("ANDの条件と一致しなかった処理");
  console.log(numA == 20 && numB == 40);
};

var numA = 15;
var numB = 45;
if (numA == 20 || numB == 40) {
  console.log("ORの条件と一致した処理");
  console.log(numA == 20 || numB == 40);
} else {
  console.log("ORの条件と一致しなかった処理");
  console.log(numA == 20 || numB == 40);
};

var boolean = true;
if (!boolean) {
  console.log("NOTの条件と一致した処理");
  console.log(boolean);
} else {
  console.log("NOTの条件と一致しなかった処理");
  console.log(boolean);
}

var textA = "Hello World."
var textB = "Hello JavaScript."
if (textA === "Hello World." && textB === "Hello JavaScript.") {
  console.log(textA === "Hello World." && textB === "Hello JavaScript.");
} else {
  console.log(textA === "Hello World." && textB === "Hello HTML.");
};

if (textA === "Hello World." || textB === "Hello JavaScript.") {
  console.log(textA === "Hello World." || textB === "Hello JavaScript.");
} else {
  console.log(textA === "Hello World." || textB === "Hello JavaScript.");
};

var number = 1234;
if (number != 1234) {
  console.log("false");
} else {
  console.log("true");
};