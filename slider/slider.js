const reviews = [{
    name: "Shahriyar",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    name: "Mariam",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece."
  },
  {
    name: "Rakhi",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
  },
  {
    name: "Ritu",
    text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
  }
];

let text = document.querySelector(".text");
let name = document.querySelector(".name")

let nextBtn = document.querySelector(".right-icon");
let prevBtn = document.querySelector(".left-icon");


let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

let showPerson = (person) => {
  let item = reviews[person];

  text.textContent = item.text;
  name.textContent = item.name;
}

nextBtn.addEventListener("click", () => {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson(currentItem);
});