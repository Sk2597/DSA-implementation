const fs = require('fs');

function readInput(callback) {
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading input file:', err);
      return;
    }

    // Split the data into lines
    const lines = data.trim().split('\n');

    // Extract the number of test cases
    const numberOfTestCases = parseInt(lines.shift());

    // Process each line of input
    const inputs = lines.map(line => parseFloat(line));

    // Pass the number of test cases and array of inputs to the callback function
    callback(numberOfTestCases, inputs);
  });
}

module.exports = {
  readInput
};
