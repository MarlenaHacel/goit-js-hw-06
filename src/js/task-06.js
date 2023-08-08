const inputElement = document.getElementById("validation-input");

function validateInput() {
  const length = parseInt(inputElement.getAttribute("data-length"), 10);
  const inputValue = inputElement.value;

  if (inputValue.length === length) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
}

inputElement.addEventListener("blur", validateInput);
