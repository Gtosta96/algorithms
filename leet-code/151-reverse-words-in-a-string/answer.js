/**
 * @param {string} str
 * @returns {string}
 */
// var reverseWords = function(str) {
//   const split = str.trim().split(/\s+/g);
  
//   return split.reverse().join(' ');
// }

var reverseWords = function(str) {
  const split = str.trim().split(/\s+/g);
  if (split[0] === '' && split[1] === '') return '';

  let result = '';
  for (let i = split.length - 1; i >= 0; i--) {
    result += split[i] + (i !== 0 ? ' ' : '');
  }

  return result;
}

console.log(reverseWords('the  sky is blue'));
console.log(reverseWords('        '));
console.log(reverseWords(' 1'));