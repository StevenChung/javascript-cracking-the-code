var memoize = function(func) {
  var cache = {};

  return function() {
    var args = [].slice.call(arguments).join(",");

    if (!cache[args]) {
      cache[args] = func.apply(this, arguments);
    }

    return cache[args];
  };
};

var fib = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  else {
    return fib(n - 1) + fib(n - 2);
  }
};

