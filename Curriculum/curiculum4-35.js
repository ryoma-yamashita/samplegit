for (var i = 1; i < 10; i++) {
  console.log("ループ" + i + "回目");
};

var items = ["リンゴ", "バナナ", "イチゴ"];
for (index in items) {
  console.log(items[index]);
}

var teachers = [
  {
    name: "太郎",
    age: 25,
    subject: "国語"
  },
  {
    name: "浩司",
    age: 30,
    subject: "数学"
  },
  {
    name: "花子",
    age: 26,
    subject: "社会"
  }
];
for (teacher of teachers) {
  console.log(teacher);
};

for (var num = 1; num <= 10; num++) {
  console.log("繰り返し" + num + "回目");
};

var text = ["テキスト", "文章", "口語", "ナンバー"];
for (index in text) {
  console.log(text[index]);
};

var humans = [
  {
    name: "佐藤花子",
    age: 22,
    job: "看護師"
  },
  {
    name: "鈴木次郎",
    age: 25,
    job: "自営業"
  },
  {
    name: "田中順子",
    age: 30,
    job: "主婦"
  }
];
for (human of humans) {
  console.log(human);
}