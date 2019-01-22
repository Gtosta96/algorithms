/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  if (S.length === 0) return 0;

  const stack = [];
  let counter = 0;

  for (let i = 0; i < S.length; i++) {
    const current = S[i];

    if (current === '(') {
      stack.push(current);
      counter++;

    } else if (current === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
        counter--;
      } else {
        stack.push(current);
        counter++;
      }
    }
  }

  // return [counter, stack];
  return counter;
};

console.log(minAddToMakeValid('())'));
console.log(minAddToMakeValid('((('));
console.log(minAddToMakeValid('()'));
console.log(minAddToMakeValid('()))(('));

console.log(minAddToMakeValid('()()'));