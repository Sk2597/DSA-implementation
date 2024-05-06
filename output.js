const fs = require('fs');

function writeOutput(result) {
  fs.writeFile('output.txt', result.toString(), 'utf8', (err) => {
    if (err) {
      console.error('Error writing output file:', err);
      return;
    }
    console.log('Result:', result);
  });
}

module.exports = {
  writeOutput
};
