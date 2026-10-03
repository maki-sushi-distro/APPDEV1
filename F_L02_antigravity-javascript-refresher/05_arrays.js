let favoriteThings = ["Keychain", "Sketchpad", "Camera"];
favoriteThings.push("Books"); //  ["Keychain", "Sketchpad", "Camera", "Books"];
favoriteThings.shift(); // ["Sketchpad", "Camera", "Books"];

for (const things of favoriteThings) {
  console.log(things);
}

const liked = favoriteThings.map((things) => "I like " + things);
console.log(liked);

// Exercise
let favoriteFoods = ["Ramen", "Sushi", "Takoyaki"];
favoriteFoods.push("Onigiri");
favoriteFoods.pop();
favoriteFoods.unshift("Mochi");
favoriteFoods.shift();

for (const food of favoriteFoods) {
  console.log(food);
}

const reactions = favoriteFoods.map((food) => food + " is oishii!");
console.log(reactions);
