console.log(6 == "6"); // true
console.log(19 === "19"); // false

let notDefined;
let empty = null;

console.log(notDefined); // undefined
console.log(empty); // null

//this & Reference vs Copy

const obj = {
  name: "Steve",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    console.log(this.name);
  },
};

obj.regularMethod(); // "Steve"
obj.arrowMethod(); // undefined

const original = ["header", "body", "footer"];

const copyByReference = original;
copyByReference.push("salutation");
console.log(original); // ['header', 'body', 'footer', 'salutation'] - same array in memory, so both names see the change

const copyBySpread = [...original];
copyBySpread.push("sender address");
console.log(original); // ['header', 'body', 'footer', 'salutation']   - untouched by the spread copy
console.log(copyBySpread); // ['header', 'body', 'footer', 'salutation', 'sender address']- its own separate array
