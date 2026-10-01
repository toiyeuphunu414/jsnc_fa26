// document.getElementById("name").value;
document.getElementById("form-add").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const email = document.getElementById("email").value;
  const newstudent = {
    name: name,
    price: price,
    email: email,
  };
  console.log(newstudent);
  if (!name) {
    alert("Vui long nhap ten");
    return;
  }
  if (!price) {
    alert("Vui long nhap so tien");
    return;
  }
  if (!email) {
    alert("Vui long nhap email");
    return;
  }

  //   if (!/^\d{10}$/.test(price)) {
  //     alert("So dien thoai phai co 10 so");
  //   }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Dinh dang email khong hop le");
    return;
  }
  axios
    .post("http://localhost:3000/products", newstudent)
    .then(() => {
      window.location.href = "index.html";
      alert("Them thanh cong");
    })
    .catch(() => {
      alert("Them that bai");
    });
});
