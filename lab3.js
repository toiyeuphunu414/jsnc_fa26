// template literal

const name = "kmsdev";
const age = 19;
const info = "Ten: " + name + " Tuoi: " + age;
console.log(info);

const myname = `Tên tôi là: ${name}
Tuổi: ${age}`;

console.log(myname);

const student = {
    id: 1,
    name: "Nguyễn Văn An",
    age: 19,
};

const studentinfo = `Mã sinh viên: ${student.id}
Tên: ${student.name}
Tuổi: ${student.age}`;

console.log(studentinfo);

const arr = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
  },
];

const arrInfo = `${arr[0].name}`;
console.log(arrInfo);

const html = `
  <div>
    <h3>${student.name}</h3>
    <p>Mã: ${student.id}</p>
    <p>Tuổi: ${student.age}</p>
  </div>
`;
// document.getElementById("app").innerHTML = html;

function add(a, b) {
  return a + b;
}
// arrow function
const add2 = (a, b) => {
  return a + b;
};

const add3 = (a, b) => a + b; // return a + b
console.log(add2(3, 4));
console.log(add2(6, 4));

// map
const students = [
  { id: 1, name: "An" }, // item
  { id: 2, name: "Bình" }, // item
  { id: 3, name: "Cường" }, // item
];

const mapInfo = students.map((item) => {
  console.log(item);
  return `ID: ${item.id} - Ten: ${item.name}`;
});

console.log(mapInfo);

// Bài tập lab 3

const name1 = "Nguyễn Đại Khang";
const age1 = 20;
const major1 = "Lập trình Web";

const info1 = `Xin chào ${name1}
Bạn ${age1} tuổi
Ngành: ${major1}`;
console.log(info1);

const student1 = {
    idd: 1,
    name1: "Nguyễn Đại Khang",
    age1: 20,
    major: "Lập trình Web",
};

console.log(student1);

const mystudent1 = `Mã sinh viên: ${student1.idd}
Họ và tên: ${student1.name1}
Tuổi: ${student1.age1}
Ngành: ${student1.major}`;
console.log(mystudent1);
