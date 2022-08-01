let defaultLoginClassName = "login__content";

let loginContent = document.getElementsByClassName(defaultLoginClassName);
let id = loginContent[0];
let pw = loginContent[1];
let btn = loginContent[2];

document.addEventListener("keyup", function (event) {
  if (id.value.length > 0 && pw.value.length > 0) {
    btn.disabled = false;
    btn.className = defaultLoginClassName + " login__btn-enable";
  } else {
    btn.disabled = true;
    btn.className = defaultLoginClassName + " login__btn-disable";
  }
});
