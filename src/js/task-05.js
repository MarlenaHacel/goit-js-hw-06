const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const updateNameOutput = () => {
  const inputValue = nameInput.value.trim();

  nameOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
};
nameInput.addEventListener("input", updateNameOutput);
