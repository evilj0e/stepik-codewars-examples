// https://www.codewars.com/kata/the-crockford-invocation

function add(a) {
  return function(b) {
    return a + b;
  };
}

function subtract(a) {
  return function(b) {
    return a - b;
  };
}

function multiply(a) {
  return function(b) {
    return a * b;
  };
}

function apply(fn) {
  return fn;
}
