
// https://leetcode.com/problems/squares-of-a-sorted-array/discuss/226530/JavaScript-O(N)-solution-wExplanation!-11-Lines-No-Arrays.sort()
// 2 POINTERS TECHNIQUE

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let res = [];
  let up = 0, down = A.length-1;
  
  while(up <= down) {
      let a =   A[up] * A[up];
      let b = A[down] * A[down];
      if(a > b) {
          res.push(a);
          up++;
      } else {
          res.push(b);
          down--;
      }
  }
  
  return res.reverse();
};

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]