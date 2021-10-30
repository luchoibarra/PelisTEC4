import Request from "./request.js";

export default class Checker {
  verifyInput() {
    const inputValue = document.querySelector(".my-input");

    if (inputValue.value === "") {
      this.getErrorContainer("You must fill in all of the fields");
    } else {
      const request = new Request();
      request.getInfo(inputValue.value);

      inputValue.value = "";
    }
  }

  getErrorContainer(errorMsg) {
    const fragment = new DocumentFragment();
    const errorContainer = document.querySelector(".error-container");
    const errorTemplate = document.querySelector(".error-template").content;

    const clone = errorTemplate.cloneNode(true);
    fragment.appendChild(clone);

    errorContainer.appendChild(fragment);

    document.querySelector(".alert-error").innerText = errorMsg;
    this.displayError(errorContainer);
  }

  displayError(errorContainer) {
    errorContainer.style.display = "block";

    setTimeout(() => {
      errorContainer.style.display = "none";

      while (errorContainer.firstChild) {
        errorContainer.firstChild.remove();
      }
    }, 1500);
  }
}
