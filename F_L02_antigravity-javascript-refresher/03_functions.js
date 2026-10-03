function greet(name) {
  return "Konnichiwa, " + name + "-san";
}

const square = (num) => {
  return num * num;
};

function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log(greet("Makoto"));
console.log(square(10));
console.log(calculator(4, 6));

// Exercise: welcome(name) - function declaration
function welcome(name) {
  return "Ohayogozaimasu, " + name + "-san! Genki-desu?";
}

// Exercise: factorial(num) - arrow function
const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};

// Exercise: area(r, pi) - returns an object with circle properties
function area(r, pi) {
  return { radius: r, pi: pi, area: pi * r * r };
}

console.log(welcome("Maki"));
console.log(factorial(5));
console.log(area(5, 3.1416));
