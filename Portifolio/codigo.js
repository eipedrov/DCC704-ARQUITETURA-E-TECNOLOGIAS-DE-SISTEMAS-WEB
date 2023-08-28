const navBar = document.querySelector(".nav_menu_bars");
const navUl = document.querySelector(".nav_ul");
const navLinks = document.querySelectorAll(".nav_ul li");

function add_removeClass() {
  navBar.classList.toggle("nav_menu_bars_active");
  navUl.classList.toggle("nav_ul_active");
}

navBar.addEventListener("click", () => {
  add_removeClass();
});

navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    add_removeClass();
  });
});

function widthSize() {
  let ancho = window.innerWidth;
  if (ancho > 750) {
    console.log("oi");
    navBar.classList.remove("nav_menu_bars_active");
    navUl.classList.remove("nav_ul_active");
  }
  console.log(ancho);
}

window.addEventListener("resize", widthSize);

setTimeout(() => {
  window.location.href = '/'
}, 5000);

// Envio do formulario com o formSubmit 
class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Sua mensagem foi enviada com sucesso!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();

