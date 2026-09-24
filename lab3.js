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

