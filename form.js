// FORM VALIDATION starts here

const form = {
  firstName: null,
  lastName: null,
  street: null,
  flat: null,
  house: null,
  paymentMethod: null,
  gifts: [],
};

const validations = {
  firstName(value) {
    console.log(value);

    if (value.length < 4) {
      return false;
    }

    if (/[^A-Za-z]/.test(value)) {
      return false;
    }

    return true;
  },

  lastName(value) {
    // some logic here
    if (value.length < 5) {
      return false;
    }
    if (/[^A-Za-z]/.test(value)) {
      return false;
    }

    return true;
  },

  date(value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    if (new Date(value) < tomorrow) {
      return false;
    }
    return true;
  },

  street(value) {
    if (value.length < 5) {
      return false;
    }
    if (/[^A-Za-z0-9 ]/.test(value)) {
      return false;
    }

    return true;
  },

  flat(value) {
    if (!/^[0-9]+(-[0-9]+)*?$/.test(value)) {
      return false;
    }

    return true;
  },

  house(value) {
    if (!/^[0-9]+(-[0-9]+)*?$/.test(value)) {
      return false;
    }

    return true;
  },

  paymentMethod(value) {
    return !!value;
  },

  gifts(values) {
    return values.length <= 2;
  },
};

function updateField(field, event, errorMessageSelector) {
  const value = getInputValue(event.target);

  const isValid = validations[field](value);

  const errorMsgWrapper = errorMessageSelector
    ? document.querySelector(errorMessageSelector)
    : event.target.parentNode;

  if (!isValid) {
    form[field] = null;

    if (!errorMsgWrapper.querySelector(".error-msg")) {
      // 1. set class "field-invalid" to the field wrapper
      errorMsgWrapper.classList.add("field-invalid");

      // 2. render error message if not already there
      const errorMsgEl = document.createElement("span");
      errorMsgEl.classList.add("error-msg");
      errorMsgEl.innerText = "The field is invalid!";
      errorMsgWrapper.appendChild(errorMsgEl);
    }
  } else {
    form[field] = value;

    // 1. remove class "field-invalid" from the field wrapper
    errorMsgWrapper.classList.remove("field-invalid");

    // 2. remove error message if there
    const errorMsgEl = errorMsgWrapper.querySelector(".error-msg");
    if (errorMsgEl) {
      errorMsgEl.remove();
    }
  }

  const submitBtn = document.querySelector(".btns > button");
  if (!isFormValid()) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

function isFormValid() {
  let isValid = true;
  for (let field in form) {
    if (!form[field]) {
      isValid = false;
    }
  }

  return isValid;
}

function getInputValue(el) {
  if (el.type === "checkbox") {
    const checkboxesWithSameName = document.getElementsByName(el.name);
    const value = [];
    for (var i = 0; i < checkboxesWithSameName.length; i++) {
      if (checkboxesWithSameName[i].checked) {
        value.push(checkboxesWithSameName[i].value);
      }
    }
    return value;
  } else {
    return el.value;
  }
}

function submitForm(event) {
  event.preventDefault();
  if (!isFormValid()) {
    return;
  }

  // hide form
  document.querySelector(".form-wrapper").style.display = "none";

  const confirmationWrapper = document.querySelector(".confirm-wrapper");

  // show confirmation
  const containerEl = document.createElement("div");
  containerEl.classList.add("form-container");
  containerEl.style.borderRadius = "15px";

  const contentEl = document.createElement("div");
  contentEl.classList.add("confirmation-alert");

  contentEl.innerHTML = `
    <p>Thank you! The order is created.</p>
    <p>The delivery address is ${form.street} Street, house ${form.house}, flat ${form.flat}.</p>
    <p>Customer: ${form.firstName} ${form.lastName}</p>
  `;
  containerEl.appendChild(contentEl);
  confirmationWrapper.appendChild(containerEl);

  document.querySelector(".confirm-wrapper").style.display = "flex";
}
// FORM VALIDATION ends here
