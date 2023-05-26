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
        this.formData = new FormData(this.form);
        // console.log(this.formData.get("name"));
        // this.sendMail(this.formData);
        this.form.submit();
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
      field.name === "phone" &&
      (field.value.length < 7 || !isFinite(field.value))
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

  // sendMail(formData) {
  //   fetch("https://formsubmit.co/ajax/392a7c06442cc891eb166a14299290f5", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       title: "New lead from LP template",
  //       name: `${formData.get("name")}`,
  //       email: `${formData.get("email")}`,
  //       phone: `${formData.get("phone")}`,
  //       message: `${formData.get("message")}`,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }
}
