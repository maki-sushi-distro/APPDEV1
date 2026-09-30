const raw = "  Henry Sy  ";

const clean = raw.trim();

const [first, last] = clean.split(" ");

console.log(first.toUpperCase()); // "HENRY"

console.log(clean.includes("Sy")); // true

console.log(clean.slice(0, 5)); // "henry"

console.log(`Full name: ${first} ${last}`);

console.log(parseInt("64px")); // 64
console.log((21.02932).toFixed(2)); // "21.03"

const result = "dnf" / 2;
console.log(result); // NaN
console.log(Number.isNaN(result)); // true
