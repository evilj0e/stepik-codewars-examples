// https://www.codewars.com/kata/5b773b698adeaeb6b80000df

function memo(fn) {
  const cache = new Map();

  return function(param) {
    if (cache.has(param)) {
      return cache.get(param);
    }

    const result = fn(param);

    cache.set(param, result);

    return result;
  };
}
