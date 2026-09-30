const values = [0, "", "hello", null, undefined, [], {}];
 
values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});
// "hello", [], and {} are truthy —  the rest 4 values above are falsy


const username = "yummy_yumburger";
const password = "jollibida123";
 
const canLogIn = username !== "" && password !== "";
console.log(canLogIn); // true
 
const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;
console.log(canWatch); // true
 
console.log("" || "default");        // "default" (first truthy)
console.log(username && "Otsukaresu!");  // "Welcome!" (both truthy)
console.log(!canLogIn);                // false
