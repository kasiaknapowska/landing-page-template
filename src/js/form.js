export class Form {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.formData = {};
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    let self = this;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      let errors = 0;

      self.fields.forEach((field) => {
        const input = this.form[field];

        if (self.validateFields(input) === false) {
          errors++;
        }
      });

      if (errors === 0) {
        this.formData = {
          name: this.form.elements["name"].value,
          phone: this.form.elements["phone"].value,
          email: this.form.elements["email"].value,
          message: this.form.elements["message"].value,
        };
        console.log(this.formData);
      }
    });
  }

  validateFields(field) {
    let emailValidRegEx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (field.name !== "message" && field.value.trim() === "") {
      this.setStatus(field, "Wypełnij to pole", "error");
      return false;
    }
    if (
      (field.name === "phone" && (field.value.length < 7 ||
      !isFinite(field.value)))
    ) {
      this.setStatus(field, "Podaj prawidłowy numer telefonu", "error");
      return false;
    }

    if (field.name === "email" && !field.value.match(emailValidRegEx)) {
      this.setStatus(field, "Podaj prawidłowy adres e-mail", "error");
      return false;
    }
    if (field.type === "checkbox" && !field.checked) {
      this.setStatus(field, "Zaznacz zgodę", "error");
      return false;
    }
    this.setStatus(field, null, "success");
    return true;
  }

  setStatus(field, message, status) {
    const errorMessage = field.parentElement.querySelector(".error-message");
    if (status === "error") {
      errorMessage.innerText = message;
      field.classList.add("input-error");
    }
    if (status === "success") {
      if (errorMessage) {
        errorMessage.innerText = "";
      }
      field.classList.remove("input-error");
    }
  }
}
