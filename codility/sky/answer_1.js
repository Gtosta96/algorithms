
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  if (!A || !B || A.length !== B.length) {
    return null;
  }

  const cardWeight = {
    'A': 13,
    'K': 12,
    'Q': 11,
    'J': 10,
    'T': 9,
    '9': 8,
    '8': 7,
    '7': 6,
    '6': 5,
    '5': 4,
    '4': 3,
    '3': 2,
    '2': 1,
  }

  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    const currentA = A[i];
    const currentB = B[i];
    
    if (cardWeight[currentA] > cardWeight[currentB]) {
      sum++;
    }
  }

  return sum;
}

console.log(solution('A586QK', 'JJ653K'));
console.log(solution('23A84Q', 'K2Q25J'));