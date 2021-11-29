var fruits = ["リンゴ", "バナナ", "イチゴ"];
console.log(fruits);

console.log(fruits[0]);

var teacher = {
  name: "太郎",
  age: 25,
  subject: "国語"
};
console.log(teacher);
console.log(teacher.name);

var teachers = [
  {
    name: "太郎",
    age: 25,
    subject: "国語"
  },
  {
    name: "浩司",
    age: 30,
    subject: "数学",
  },
  {
    name: "花子",
    age: 26,
    subject: "社会"
  }
];
console.log(teachers[1]);

var number = [10, 20, 30];
console.log(number[0],number[2]);

// "key","value","プロパティー"について説明してください
//   {
//   「name:←この部分が""key" "太郎"←この部分が"value",」←このまとまりが"プロパティー"
//   age: 25,
//   subject: "国語"
// },

var human = {
  name: "山田太郎",
  age: 20,
  job: "会社員"
};
console.log(human);

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
console.log(humans[0].job,humans[2].name);