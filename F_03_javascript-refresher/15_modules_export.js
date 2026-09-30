const userInfo = { name: "Steve", age: 25 }; // declared variable to be exported and used in another file

function greet() {
  return "Hello from the module"; // prints "Hello from the module" whenever the function greet is called
}

export default greet; // default export
export { userInfo }; // named export
