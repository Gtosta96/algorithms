// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let max = 0;
    let current = 0;
    let started = false;
    const binaryNumber = Number(N).toString(2);
    
    for (let i = binaryNumber.length - 1; i > 0; i--) {
        const currentBinaryNumber = binaryNumber[i];

        if (started && currentBinaryNumber === '0') {
            current++;

            if (current > max) {
                max = current;
            }
        } else {
            if (currentBinaryNumber === '1') {
                started = true;

                if (current !== 0) {
                    current = 0
                }
            }
        }
    }

    return max;
}


console.log(solution(9)); // 2
console.log(solution(529)); // 4 3
console.log(solution(32));
console.log(solution(1041));