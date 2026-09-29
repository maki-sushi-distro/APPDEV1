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
