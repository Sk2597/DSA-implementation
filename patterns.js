const inputModule = require('./input');
const outputModule = require('./output');

inputModule.readInput((numberOfTestCases, inputs) => {
  for(let i =0; i < numberOfTestCases; i++){
    input = inputs[i];
    // pattern1(input);
    pattern2(input);
  }
});
/*====================================================*/

/*
   * * * *
   * * * *
   * * * *
   * * * *
*/

function pattern1(n){
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str += "* "
    }
    console.log(str);
    str = "";
  }
}

/*Pattern 2
    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
 */

function pattern2(n){
  for (let i = 0; i < input; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "* "
    }
    console.log(str);
    str = "";
  }
}

