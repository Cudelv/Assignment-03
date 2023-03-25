"use strict";
//Đoạn code dùng để kiểm tra email
const Display = document.querySelector(".per-display");
const Hidden = document.querySelector(".per-hidden");
const warnning = document.querySelector(".per-warn");
const btnSubmit = document.getElementById("per-check");
const userEmail = document.getElementById("email");
const btnHide = document.querySelectorAll(".container1");
const view = document.querySelectorAll(".cont-detail"); //Trả về mảng chứa tập hợp class='cont-detail'
//Hàm test(mail) kiểm tra email nhập vào có đúng định dạng không, trả về true or false
const isEmail = function (email) {
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(email);
};
//Thêm event click và tạo function xử lý event click
btnSubmit.addEventListener("click", validateEmail);
function validateEmail() {
  if (userEmail.value == "") {
    warnning.textContent = "Bạn chưa nhập email. Xin vui lòng nhập Email !";
    warnning.style.color = "red";
  } else if (!isEmail(userEmail.value)) {
    warnning.textContent = "Email của bạn không đúng. Xin vui lòng nhập lại ! ";
    warnning.style.color = "red";
  } else {
    Display.classList.add("per-hidden");
    Hidden.classList.remove("per-hidden");
  }
}
//Đoạn code dùng cho viewmore & viewless
const btnViewmoreList = document.querySelectorAll(".btn-view");
for (let i = 0; i < btnViewmoreList.length; i++) {
  btnViewmoreList[i].addEventListener("click", function () {
    if (btnViewmoreList[i].textContent == "⩢ Viewmore") {
      view[i].classList.remove("detail-hidden");
      btnViewmoreList[i].textContent = "⩞ Viewless";
    } else {
      view[i].classList.add("detail-hidden");
      btnViewmoreList[i].textContent = "⩢ Viewmore";
    }
  });
}
//Đoạn code ẩn hiện các button Viewmore
for (let i = 0; i < btnHide.length; i++) {
  btnHide[i].addEventListener("mouseover", function () {
    btnHide[i].querySelector(".btn-view").classList.remove("btn-hidden");
  });
  btnHide[i].addEventListener("mouseout", function () {
    btnHide[i].querySelector(".btn-view").classList.add("btn-hidden");
  });
}
// for (let i = 0; i < btnHide.length; i++) {
//   btnHide[i].addEventListener("mouseover", function () {
//     btnHide[i].querySelector(".btn-view").classList.toggle("btn-hidden");
//   });
// }
