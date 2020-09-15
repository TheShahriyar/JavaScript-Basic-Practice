let count = 0;
let counterNumber = document.querySelector('.count-number')

let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let increaseBtn = document.getElementById("increase");

decreaseBtn.addEventListener('click', () => {
  count--;
  counterNumber.textContent = count;
});
increaseBtn.addEventListener('click', () => {
  count += 1;
  counterNumber.textContent = count;
});
resetBtn.addEventListener('click', () => {
  count = 0;
  counterNumber.textContent = count;
});