const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

const n = Number(input);
let result = "";

for (let i = 1; i <= 2*n; i++) {
  if (i % 2 !== 0) {
    result += "* ".repeat(n-(i/2)+1) + "\n";
  } else {
    result += "* ".repeat(i / 2) + "\n";
  }
}

console.log(result);