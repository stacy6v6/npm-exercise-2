const args = require('process');
let argList = [];
let argCount = 0;

for (let i = 2; i < process.argv.length; i++) {
  argList.push(process.argv[i]);
  argCount++;
}

let combinedArg = argList.join(' ');
let vowelCount = 0;
let iterator = 0;

while (iterator < combinedArg.length) {
  if (
    combinedArg[iterator].toLowerCase() === 'a' ||
    combinedArg[iterator].toLowerCase() === 'e' ||
    combinedArg[iterator].toLowerCase() === 'i' ||
    combinedArg[iterator].toLowerCase() === 'o' ||
    combinedArg[iterator].toLowerCase() === 'u'
  ) {
    vowelCount++;
  }
  iterator++;
}

console.log(`No. of Arguments: ${argCount}`);
console.log(`Vowel Count of the Combined String: ${vowelCount}`);
