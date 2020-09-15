let people = [{
    name: "Shahriyar",
    age: 31,
    profession: "Web Developer"
  },
  {
    name: "Mariam",
    age: 30,
    profession: "Doctor"
  },
  {
    name: "Rakhi",
    age: 27,
    profession: "Student"
  },
  {
    name: "Ritu",
    age: 17,
    profession: "Student"
  }
];

let single = people.map((item) => {
  return (
    `
    <h2>Name: ${item.name}</h2>
    <h4>Age: ${item.age}</h4>
    <h5>Profession: ${item.profession}</h5>
    `
  );
});

console.log(single[0]);

let result = document.querySelector(".map-result");

result.innerHTML = single.join(" ");



// Unique Value
let numbers = [2, 3, 2, 4, 5, 3, 4, 6];

let unique = [...new Set(numbers)];

console.log(unique);