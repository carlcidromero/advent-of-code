const data = require("./data");

function log() {
  const left = [];
  const right = [];

  data.split("\n").forEach((tuple) => {
    const [l, r] = tuple.split("   ");
    left.push(l);
    right.push(r);
  });

  left.sort();
  right.sort();

  let result = 0;

  for (let i = 0; i < left.length; i++) {
    result += Math.abs(left[i] - right[i]);
  }

  console.log(result);
}

module.exports = log;
