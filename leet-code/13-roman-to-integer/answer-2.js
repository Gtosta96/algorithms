/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = s[i + 1];

    if (
      (current === 'I' && (next === 'V' || next === 'X')) ||
      (current === 'X' && (next === 'L' || next === 'C')) ||
      (current === 'C' && (next === 'D' || next === 'M'))
      ) {
      result += map[next] - map[current];
      i++;
    } else {
      result += map[current];
    }
  }

  return result;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));

console.log(romanToInt('XIII'));
console.log(romanToInt('XIX'));