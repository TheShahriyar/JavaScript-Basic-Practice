// Method One

// let btns = document.querySelectorAll(".controller");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   })
// });


// Method Two

let questions = document.querySelectorAll(".accordion-item");

questions.forEach((question) => {
  let btn = question.querySelector(".controller");

  btn.addEventListener("click", () => {

    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  })
})