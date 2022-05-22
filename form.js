// FORM VALIDATION starts here

const form = {
  firstName: null,
  lastName: null,
  street: null,
  flat: null,
  house: null,
  paymentMethod: null,
  gifts: null,
};

const validations = {
  firstName(value) {
    console.log(value);
    if (value.length < 4) {
      return false;
    }
    if (/[^A-Za-z ]/.test(value)) {
      return false;
    }

    return true;
  },

  lastName(value) {
    // some logic here
    if (value.length < 5) {
      return false;
    }
    if (/[^A-Za-z ]/.test(value)) {
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
  paymentMethod(value) {},
  gifts(value) {},
};

function updateField(field, event) {
  form[field] = event.target.value; // test

  const isValid = validations[field](event.target.value);
  if (!isValid) {
    // 1. set class "field-invalid" to the field wrapper
    event.target.parentNode.classList.add("field-invalid");

    // 2. render error message if not already there
    if (!event.target.parentNode.querySelector(".error-msg")) {
      const errorMsgEl = document.createElement("span");
      errorMsgEl.classList.add("error-msg");
      errorMsgEl.innerText = "The field is invalid!";
      event.target.after(errorMsgEl);
    }
  } else {
    // 1. remove class "field-invalid" from the field wrapper
    event.target.parentNode.classList.remove("field-invalid");

    // 2. remove error message if there
    const errorMsgEl = event.target.parentNode.querySelector(".error-msg");
    if (errorMsgEl) {
      errorMsgEl.remove();
    }
  }
}
// FORM VALIDATION ends here
