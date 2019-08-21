function compose(...args) {
  return param => args.reverse().reduce((ar, func) => func(ar), param);
}
