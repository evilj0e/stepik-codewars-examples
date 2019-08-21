// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function fn(n, operation) {
  return operation ? operation(n) : n;
}
function zero(op) {
  return fn(0, op);
}
function one(op) {
  return fn(1, op);
}
function two(op) {
  return fn(2, op);
}
function three(op) {
  return fn(3, op);
}
function four(op) {
  return fn(4, op);
}
function five(op) {
  return fn(5, op);
}
function six(op) {
  return fn(6, op);
}
function seven(op) {
  return fn(7, op);
}
function eight(op) {
  return fn(8, op);
}
function nine(op) {
  return fn(9, op);
}

function plus(num) {
  return function(res) {
    return res + num;
  };
}
function minus(num) {
  return function(res) {
    return res - num;
  };
}
function times(num) {
  return function(res) {
    return res * num;
  };
}
function dividedBy(num) {
  return function(res) {
    return Math.floor(res / num);
  };
}
