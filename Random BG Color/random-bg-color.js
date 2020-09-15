const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById("btn");
let colorCode = document.querySelector(".color");

btn.addEventListener('click', () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[randomNumber()];
  }

  colorCode.textContent = hexCode;

  document.body.style.backgroundColor = hexCode;
});

let randomNumber = () => {
  return Math.floor(Math.random() * hex.length);
}

// let randomNumber = Math.floor(Math.random() * hex.length);