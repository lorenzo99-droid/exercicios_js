var numbers = [4, 9, 16, 25];

const raizQuadrada = numbers.map((num) => {
  return Math.sqrt(num);
});

console.log(raizQuadrada);

/* _______________________________________________________*/

var numbers = [65, 44, 12, 4];

const x10 = numbers.map((num) => {
  return num * 10;
});

console.log(x10);
/* _______________________________________________________*/

var ages = [32, 33, 16, 40];

var overAge = ages.filter((elem, i, ages) => {
  return elem >= 18;
});

console.log(overAge);
/* _______________________________________________________*/

data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },

  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
];

const onlydog = data.filter((especie) => especie.type.includes("dog"));

console.log(onlydog);

/* _______________________________________________________*/

const idadeSoma = onlydog
  .map((idade) => idade.age)
  .reduce((ant, post) => ant + post, 0);

console.log(idadeSoma);
