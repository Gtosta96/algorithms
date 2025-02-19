/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {

  let counter = 0;
  for (let i = 0; i < S.length; i++) {
    if (J.indexOf(S[i]) !== -1) {
      counter++;
    }
  }

  return counter;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));