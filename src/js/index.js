document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const navbar = document.getElementById("navbar");
  const header = document.querySelector("header");
  let body_scroll = document.body.scrollTop;
  let d_elementScroll = document.documentElement.scrollTop;

  window.onscroll = () => {
    myFunction();
  };

  function myFunction() {
    if (document.documentElement.scrollTop > 100) {
      setTimeout(() => {
        navbar.classList.add("navbar");
      }, 800);
    } else {
      setTimeout(() => {
        navbar.classList.remove("navbar");
      }, 800);
    }
  }
  const nom = document.querySelector("label");
  const _prenom = document.getElementById("label_1");
  const _email = document.getElementById("label_2");
  const _password = document.getElementById("label_3");
  const _conf_pass = document.getElementById("label_4");
  if (nom ?? false) {
    nom.addEventListener("click", () => {
      const input = document.querySelector("input");
      input.style.height = "2.8em";
      input.style.borderRadius = "6px";
    });
  }
  if (_prenom ?? false) {
    _prenom.addEventListener("click", () => {
      const input1 = document.getElementById("_prenom");
      input1.style.height = "2.8em";
      input1.style.borderRadius = "6px";
    });
  }
  if (_email ?? false) {
    _email.addEventListener("click", () => {
      const _email_ = document.getElementById("_email");
      _email_.style.height = "2.8em";
      _email_.style.borderRadius = "6px";
    });
  }
  if (_password ?? false) {
    _password.addEventListener("click", () => {
      const _password_ = document.getElementById("_password");
      _password_.style.height = "2.8em";
      _password_.style.borderRadius = "6px";
    });
  }
  if (_conf_pass ?? false) {
    _conf_pass.addEventListener("click", () => {
      let _conf_pass_ = document.getElementById("_confirm");
      _conf_pass_.style.height = "2.8em";
      _conf_pass_.style.borderRadius = "6px";
      this.addEventListener("keyup", () => {
        let value = _conf_pass_.value;
        if (value === _password) {
          document.getElementById("_password_conf").style.display = "none";
          // console.log("ok");
        } else {
          document.getElementById("_password_conf").style.display = "block";
          document.getElementById("_password_conf").style.color = "RED";
        }
      });
    });
  }
});
