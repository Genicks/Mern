const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/writeFile.txt",
  `Code Written file\n`,
  { flag: "a" }
);

console.log(first + "\n" + second);
console.log(readFileSync('content/writeFile.txt', 'utf-8'))