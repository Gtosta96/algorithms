const diff = (newCode, oldCode) => {

  const result = [];
  Object.keys(oldCode).forEach((oldCodeKey, index) => {
    if (!newCode[oldCodeKey]) {
      result.push(['-', oldCodeKey, oldCode[oldCodeKey]])


      const replacementKey = Object.keys(newCode)[index];
      if (replacementKey) {
        result.push(['+', replacementKey, newCode[replacementKey]]);
      }
    }
  });

  return result;
}

module.exports = diff