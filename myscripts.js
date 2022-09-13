window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function copyTextPhone() {
  let phone = document.getElementById("phone").textContent;
  navigator.clipboard.writeText(phone);
}
function copyTextEmail() {
  let text = document.getElementById("email").textContent;
  navigator.clipboard.writeText(text);
}
