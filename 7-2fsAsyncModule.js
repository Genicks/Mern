const { readFile, writeFile} = require("fs");

console.log('step 1');
readFile('./content/first.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log('step 2: Error reading first text using Async');
  } else {
    console.log('step 2:',data);
  }
})
console.log('step 3');
readFile('./content/second.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log('step 4: Error reading second text using Async');
  } else {
    console.log('step 4:',data);

  }
})
console.log('step 5');
writeFile('./content/writeFile.txt', 'Code Written in Async', {flag: 'a'}, (error, data) => {
  if (error) {
    console.log('Error writing text using Async');
  } else {
    console.log('step 6: Code written using Async');
  }
})
console.log('step 7');