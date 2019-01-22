/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  if (S.length === 0) return 0;

  let ans = 0;
  let balance = 0;
    for (let i = 0; i < S.length; ++i) {
      balance += S.charAt(i) == '(' ? 1 : -1;
      // It is guaranteed bal >= -1
      if (balance == -1) {
        ans++;
        balance++;
      }
    }

    return ans + balance;
};

console.log(minAddToMakeValid('())'));
console.log(minAddToMakeValid('((('));
console.log(minAddToMakeValid('()'));
console.log(minAddToMakeValid('()))(('));

console.log(minAddToMakeValid('()()'));