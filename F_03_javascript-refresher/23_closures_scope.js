//if (true) {
//  let canViewWithin = "can only be seen here";
//  console.log(canViewWithin); // works fine
//}
//
//try {
//  console.log(canViewWithin); // ReferenceError
//} catch (error) {
//  console.log("insideBlock is not defined out here");
//}

//createCounter()

function createCounter() {
  let count = 0;
  return function square() {
    count++;
    return count * count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1*1 = 1
console.log(counterA()); // 2*2 = 4
console.log(counterA()); // 3*3 = 9
console.log(counterB()); // 1*1 = 1
console.log(counterB()); // 2*2 = 4
