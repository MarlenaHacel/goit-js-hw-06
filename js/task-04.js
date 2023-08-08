const valueSpan = document.querySelector("#value");

let counterValue = 0;

const incrementButton = document.querySelector("[data-action ='increment']");
const decrementButton = document.querySelector("[data-action ='decrement']");

const updateCounter = () => {
  valueSpan.textContent = counterValue;
};
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});
updateCounter();
