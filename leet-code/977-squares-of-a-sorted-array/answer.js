/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {

  const result = [];
  for (let i = 0; i < A.length; i++) {
    result.push(Math.pow(A[i], 2));
  }

  return result.sort((a, b) => a - b);
};

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]