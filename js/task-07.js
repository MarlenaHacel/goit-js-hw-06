const input = document.querySelector("#font-size-control");
let spanText = document.querySelector("#text");

input.addEventListener("input", () => {
  const fontSize = input.value + "px";
  spanText.style.fontSize = fontSize;
});
