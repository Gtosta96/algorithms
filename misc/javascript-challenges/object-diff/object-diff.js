const _flatten = (path, obj, initialObj = {}) => {
  return Object.keys(obj).reduce((prev, key) => {
    const resultKey = path ? `${path}.${key}` : key;
    let resultValue = obj[key];

    if (typeof obj[key] === 'object') {
      const result = _flatten(resultKey, resultValue, prev);
      return result;
    }
    prev[resultKey] = resultValue;

    return prev;
  }, initialObj)
}

const diff = (newCode, oldCode) => {
  const result = [];

  const flattenedOldCode = _flatten('', oldCode);
  const flattenedNewCode = _flatten('', newCode);

  Object.keys(flattenedOldCode).forEach((oldCodeKey) => {
    if (!flattenedNewCode[oldCodeKey]) {
      result.push(['-', oldCodeKey, flattenedOldCode[oldCodeKey]]);
    }

    if (flattenedNewCode[oldCodeKey] && flattenedOldCode[oldCodeKey] !== flattenedNewCode[oldCodeKey]) {
      result.push(['-', oldCodeKey, flattenedOldCode[oldCodeKey]]);
    }
  });

  Object.keys(flattenedNewCode).forEach((newCodeKey) => {
    if (!flattenedOldCode[newCodeKey]) {
      result.push(['+', newCodeKey, flattenedNewCode[newCodeKey]]);
    }

    if (flattenedOldCode[newCodeKey] && flattenedOldCode[newCodeKey] !== flattenedNewCode[newCodeKey]) {
      result.push(['+', newCodeKey, flattenedNewCode[newCodeKey]]);
    }
  });

  return result;
}

module.exports = diff;
