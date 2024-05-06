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

  /*
      * * * * 
      * * * * 
      * * * * 
      * * * * 
*/

  //pattern 1
  // for (let i = 0; i < input; i++) {
  //   let str = "";
  //   for (let j = 0; j < input; j++) {
  //     str += "* "
  //   }
  //   console.log(str);
  //   str = "";
  // }

  /*Pattern 2
      * 
      * * 
      * * * 
      * * * * 
      * * * * * 
   */
  for (let i = 0; i < input; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "* "
    }
    console.log(str);
    str = "";
  }

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