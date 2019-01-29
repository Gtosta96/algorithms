/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    const map = {};
    let greatestNumber = [0, 0];

    for (let i = 0; i < A.length; i++) {
      if (map[A[i]]) {
        map[A[i]]++;
      } else {
        map[A[i]] = 1;
      }

      if (map[A[i]] > greatestNumber[1]) {
        greatestNumber = [A[i], map[A[i]]];
      }
    }

    return greatestNumber[0];
};

console.log(repeatedNTimes([1,2,3,3])); // 3
console.log(repeatedNTimes([2,1,2,5,3,2])); // 2
console.log(repeatedNTimes([5,1,5,2,5,3,5,4])); // 5
console.log(repeatedNTimes([9,5,3,3])); // 3
console.log(repeatedNTimes([1])); // 1
