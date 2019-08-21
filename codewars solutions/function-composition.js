// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026

function compose(...args) {
  return param => args.reverse().reduce((ar, func) => func(ar), param);
}
