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

// bài tập 1

const name1 = "Nguyễn Đại Khang";
const age1 = 20;
const major1 = "Lập trình Web";

const info1 = `Xin chào ${name1}
Bạn ${age1} tuổi
Ngành: ${major1}`;
console.log(info1);

// bài tập 2

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

// bài tập 3

function add(a, b) {
  return a + b;
}

// arrow function

const add2 = (a, b) => {
  return a + b;
};

console.log(add2(3, 4));

// bài tập 4

const square = (Number) => {
  return Number * Number;
};

console.log(square(5));

// tính tổng

const sum = (a, b) => {
  return a + b;
};

console.log(sum(10, 20));

const sayhello = (name) => {
  return `Xin chào ${name}`;
};

console.log(sayhello("Chiến"));

// bài tập 5

const numbers = [1, 2, 3, 4, 5];
const newnumbers = numbers.map((numbers) => {
  return numbers * 2;
});

console.log(newnumbers);
