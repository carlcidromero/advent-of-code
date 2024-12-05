// const log = require("./solution-1");
// const log = require("./solution-2");
const log = require("./solution-3");

const iterations = 100;
let result = 0;

for (let i = 0; i < 100; i++) {
  const start = performance.now();
  log();
  const end = performance.now();
  result += end - start;
}

console.log((result / iterations).toFixed(3));
