const fs = require('fs');

// Read input from input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  // Convert input to number and multiply by 2
  const inputFromTextFile = parseFloat(data.trim());
  let input = inputFromTextFile;
  // const result = input * 2;
  /*---------------------------------------------*/

  var isAnagram = function (s, t) {
    if (s.length !== t.length) {
      return false;
    }

    countS = new Map();
    countT = new Map();

    for (let i = 0; i < s.length; i++) {
      countS[s[i]] = (countS.get(s[i]) || 0) + 1;
      countT[t[i]] = (countT.get(t[i]) || 0) + 1;
    }

    for (let char in countS) {
      if (countS[char] !== countT[char]) {
        return false;
      }
    }

    return true;
  }

  const result = isAnagram(input);

  /*---------------------------------------------*/
  // Write result to output.txt
  fs.writeFile('output.txt', result.toString(), 'utf8', (err) => {
    if (err) {
      console.error('Error writing output file:', err);
      return;
    }
    console.log('Result:', result);
  });
});