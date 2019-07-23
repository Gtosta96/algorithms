// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const map = {};
    for (let i = 0; i < A.length; i++) {
        map[A[i]] = map[A[i]] + 1 || 1;
    }

    let unpaired = null;
    for (let i in map) {
        if (map[i] === 1) {
            unpaired = i;
            break;
        }
    }

    return unpaired.toString();
}


console.log(solution([9, 3, 9, 3, 9, 7, 9])); // 7
console.log(solution([3, 2, 3, 1, 4, 4, 1])); // 2