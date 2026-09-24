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

// Bài tập lab 3

const name1 = "Nguyễn Đại Khang";
const age1 = 20;
const major1 = "Lập trình Web";

const info1 = `Xin chào ${name1} Bạn ${age1} tuổi Ngành: ${major1}`;
console.log(info1);


const student1 = {
    idd: 1,
    name1: "Nguyễn Đại Khang",
    age1: 20,
    major: "Lập trình Web",
};

const mystudent1 = `Mã sinh viên: ${student1.idd} Họ và tên: ${student1.name1} Tuổi: ${student1.age1} Ngành: ${student1.major}`;
console.log(mystudent1);
