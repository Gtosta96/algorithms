/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  for (let int of A) {
      if (A.indexOf(int) !== A.lastIndexOf(int)) {
          return int;
      }
  }
};

console.log(repeatedNTimes([1,2,3,3])); // 3
console.log(repeatedNTimes([2,1,2,5,3,2])); // 2
console.log(repeatedNTimes([5,1,5,2,5,3,5,4])); // 5
console.log(repeatedNTimes([9,5,3,3])); // 3
console.log(repeatedNTimes([1])); // 1
