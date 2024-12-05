const data = require("./data");

function log() {
  const tuple = data.split("\n");
  const left = [];
  const right = [];
  for (const i of tuple) {
    const split = i.split("   ");
    left.push(split.shift());
    right.push(split.shift());
  }
  left.sort();
  right.sort();

  let result = 0;

  for (let i = 0; i < left.length; i++) {
    result += Math.abs(left[i] - right[i]);
  }

  console.log(result);
}

module.exports = log;
