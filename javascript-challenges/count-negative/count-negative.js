/*
Input:   M =  [-3, -2, ,-1, 1]
              [-2,  2,  3,  4]
              [4,   5,  7,  8]

Output: 4
We have 4 negative numbers in this matrix
*/

const matrix = [
  [-3, -2, -1,  1],
  [-2,  2,  3,  4],
  [ 4,  5,  7,  8],
];


/* naive */
function naive() {
  let counter = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        counter++;
      }
    }
  }

  console.log(counter);
}

/* good */

/* Note to myself:
 * The matrix is ordered, pay attention!!!!!!!!
 *
 * index === 0            | array.length starts on 1
 * index === array.length | index starts on array.length - 1
**/
function good() {
  let counter = 0;
  for (var i = matrix.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (matrix[i][j] < 0) {
        counter += matrix[i].length - j;
        break;
      }
    }
  }

  console.log(counter);
}

function smart() {
  let line = 0;
  let column = matrix[line].length - 1;
  let counter = 0;
  
  while (line < matrix.length && column >= 0) {
    if (matrix[line][column] > 0) {
      column--;
    } else {
      // counter += (matrix[line].length - 1) - column;
      counter += column + 1;
      line++;
    }
  }

  console.log(counter);
}


// naive();
// good();
smart();
