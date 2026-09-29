let favoriteThings = ["Keychain", "Sketchpad", "Camera"];
favoriteThings.push("Books"); //  ["Keychain", "Sketchpad", "Camera", "Books"];
favoriteThings.shift(); // ["Sketchpad", "Camera", "Books"];

for (const things of favoriteThings) {
  console.log(things);
}

const liked = favoriteThings.map((things) => "I like " + things);
console.log(liked);
