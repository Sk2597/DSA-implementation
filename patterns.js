const inputModule = require('./input');
const outputModule = require('./output');

inputModule.readInput((numberOfTestCases, inputs) => {
  for(let i =0; i < numberOfTestCases; i++){
    input = inputs[i];
    // pattern1(input);
    // pattern2(input);
    // pattern3(input);
    // pattern4(input);
    pattern5(input);
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
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "* "
    }
    console.log(str);
    str = "";
  }
}

/*
1
12
123
1234
12345 
*/
function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += `${j}` 
    }
    console.log(str);
    str = "";
  }
}

/*
1
22
333
4444
55555
*/
function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += `${i}`
    }
    console.log(str);
    str = "";
  }
}

/*
******
*****
****
***
**
*
*/
function pattern5(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 0; j<n-i+1; j++) {
      str += `*`
    }
    console.log(str);
    str = "";
  }
}



