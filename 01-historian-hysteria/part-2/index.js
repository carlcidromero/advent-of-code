const data = require("../data");

/**
 * @param {string} data
 * @returns {string[]}
 */
function tuple(data) {
  return data.split("\n");
}

/**
 * @param {string[]} data
 * @returns {string[]}
 */
function left(data) {
  /**@type {string[]} */
  let result = [];

  for (const i of data) {
    result.push(i.split("   ")[0]);
  }

  return result;
}

/**
 * @param {string[]} data
 * @returns {string[]}
 */
function right(data) {
  /**@type {string[]} */
  let result = [];

  for (const i of data) {
    result.push(i.split("   ")[1]);
  }

  return result;
}

/**
 * @param {string[]} data
 * @returns {number[]}
 */
function asNumbers(data) {
  let result = [];

  for (const i of data) {
    result.push(parseInt(i));
  }

  return result;
}

/**
 *
 * @param {number[]} left
 * @param {number[]} right
 * @returns {number}
 */
function similarity(left, right) {
  let result = 0;

  for (let i = 0; i < left.length; i++) {
    for (let j = 0; j < left.length; j++) {
      if (left[i] === right[j]) {
        result += right[j];
      }
    }
  }

  return result;
}

function log() {
  console.log(
    similarity(
      asNumbers(left(tuple(data)).sort()),
      asNumbers(right(tuple(data)).sort())
    )
  );
}

log();
