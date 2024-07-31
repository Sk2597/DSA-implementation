const inputModule = require('./input');
const outputModule = require('./output');

inputModule.readInput((numberOfTestCases, inputs) => {
  for(let i =0; i < numberOfTestCases; i++){
    // console.log(inputs);
    let input = inputs[i];
    // isAnagram(input[0], input[1]);
    // console.log(input);
    pattern1(input);
  }
});
/*====================================================*/

/*
   * * * *
   * * * *
   * * * *
   * * * *
*/

function isAnagram(s, t) {
  console.log("called")
        if(s.length !== t.length) return false;

        const countS = new Map();
        const countT = new Map();

        for(let char of s){
            if(countS.has(char)){
                countS.set(char, countS.get(char) + 1);
            } else {
                countS.set(char, 1);
            }
        }

        for(let char of t){
            if(countT.has(char)){
                countT.set(char, countT.get(char) + 1);
            } else {
                countT.set(char, 1);
            }
        }

        console.log(countS, countT);
        if(countS !== countT) return false;
        else return true;
}

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

/*
1 1 1 1 1 
2 2 2 2 2 
3 3 3 3 3 
4 4 4 4 4 
5 5 5 5 5 

n = 5
*/
function pattern7(n){
  for(let row = 1; row<=n; row++){
    let s = '';
    for(let col = 1; col <= n; col++){
      s += row + ' ';
    }
    console.log(s);
  }
}

/*
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5

n = 5
*/
function pattern8(n){
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= n; col++) {
      s += col + " ";
    }
    console.log(s);
  }
}

/*
5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1 
5 4 3 2 1 

n = 5
*/
function pattern9(n){
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = n; col >= 1; col--) {
      s += col + " ";
    }
    console.log(s);
  }
}

/*
1 4 9 16 25 
1 4 9 16 25 
1 4 9 16 25 
1 4 9 16 25 
1 4 9 16 25 

n = 5
*/
function pattern10(n){
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= n; col++) {
      s += col * col + " ";
    }
    console.log(s);
  }
}

/*
a a a a a 
b b b b b 
c c c c c 
d d d d d 
e e e e e  

n = 5
*/
function pattern11(n){
  let charA = 'a'.charCodeAt(0);
  let untilChar = charA+n - 1;
  for (let row = charA; row <= untilChar; row++) {
    let s = "";
    for (let col = charA; col <= untilChar; col++) {
      s += String.fromCharCode(row) + " ";
    }
    console.log(s);
  }
}

/*
a a a a a 
b b b b b 
c c c c c 
d d d d d 
e e e e e  

n = 5
*/
function pattern12(n){
  let charA = 'a'.charCodeAt(0);
  let untilChar = charA+n - 1;
  for (let row = charA; row <= untilChar; row++) {
    let s = "";
    for (let col = charA; col <= untilChar; col++) {
      s += String.fromCharCode(col) + " ";
    }
    console.log(s);
  }
}

/*
1 2 3 4 5 
6 7 8 9 10 
11 12 13 14 15 
16 17 18 19 20 
21 22 23 24 25  

n = 5
*/
function pattern13(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = n*(row - 1)+1; col <= n*row; col++) {
      s += col + " ";
    }
    console.log(s);
  }
}

/*
5 4 3 2 1 
5 4 3 2 
5 4 3 
5 4 
5

n = 5
*/
function pattern14(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = n; col >= row; col--) {
      s += col + " ";
    }
    console.log(s);
  }
}

/*
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 

n = 5
*/
function pattern15(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= row; col++) {
      s += col + " ";
    }
    console.log(s);
  }
}

/*
1 
2 1 
3 2 1 
4 3 2 1 
5 4 3 2 1 

n = 5
*/
function pattern16(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = row; col >= 1; col--) {
      s += col + " ";
    }
    console.log(s);
  }
}

/*
a 
b b 
c c c 
d d d d 
e e e e e 

n = 5
*/
function pattern17(n){
  let currentChar = 'a'.charCodeAt(0);
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= row; col++) {
      s += String.fromCharCode(currentChar) + " ";
    }
    console.log(s);
    currentChar++;
  }
}

/*
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 

n = 5
*/
function pattern18(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= (n - row)+1; col++) {
      s += col + " ";
    }
    console.log(s);
  }
}





/*
        * 
      * * 
    * * * 
  * * * * 
* * * * *  

n = 5
*/
function pattern19(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= n - row; col++) {
      s += " " + " ";
    }
    for(let col = 1; col <= row; col++){
      s += "*" + " ";
    }
    console.log(s);
  }
}

/*
        1 
      2 2 
    3 3 3 
  4 4 4 4 
5 5 5 5 5 

n = 5
*/
function pattern19(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= n - row; col++) {
      s += " " + " ";
    }
    for(let col = 1; col <= row; col++){
      s += row + " ";
    }
    console.log(s);
  }
}

/*
        1 
      2 2 
    3 3 3 
  4 4 4 4 
5 5 5 5 5 

n = 5
*/
function pattern20(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= n - row; col++) {
      s += " " + " ";
    }
    for(let col = 1; col <= row; col++){
      s += col + " ";
    }
    console.log(s);
  }
}


/*
        a 
      a b 
    a b c 
  a b c d 
a b c d e 

n = 5
*/
function pattern21(n) {
  let charA = "a".charCodeAt(0);
  for (let row = 1; row <= n; row++) {
    let untilChar = charA + row - 1;
    let s = "";
    for (let col = 1; col <= n - row; col++) {
      s += " " + " ";
    }
    for (let col = charA; col <= untilChar; col++) {
      s += String.fromCharCode(col) + " ";
    }
    console.log(s);
  }
}

/*
        1 
      2 1 
    3 2 1 
  4 3 2 1 
5 4 3 2 1 

n = 5
*/
function pattern22(n) {
  for (let row = 1; row <= n; row++) {
    let s = "";
    for (let col = 1; col <= n - row; col++) {
      s += " " + " ";
    }
    for(let col = row; col >= 1; col--){
      s += col + " ";
    }
    console.log(s);
  }
}



/*
coderArmy patterns 4 super hard
n = 5

          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
*/

function pattern23(n){
  for(let row = 1; row <= n; row++){
    let s = '';
    for(let col = 1; col <= n - row; col++){
      s += ' '+ ' ';
    }
    for(let col = 1; col <= row; col++){
      s += '*';
    }
    console.log(s);
  }
}






