//Callback Functions
function getMockUser(callback) {
  setTimeout(() => {
    callback({ name: "Henry", age: 35 });
  }, 2000);
}

getMockUser((user) => {
  console.log("Got user:", user); // Got user: { name: 'Henry', age: 35}
});

//Promises & async/await
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Jeff", age: 25 }), 1000);
  });
}

async function showUser() {
  try {
    const user = await getUser();
    console.log("Got user:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}

showUser();

// synchronous vs asynchronous

let name = "George";
let age = 18;
let address = "22 Jump Street";

setTimeout(() => {
  console.log("This message is printed after 2 seconds");
}, 3000);

console.log("Name:", name);
console.log("Age:", age);
console.log("Address:", address);
