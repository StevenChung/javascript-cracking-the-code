// A Child is running up a staircase with n steps, and can hop either 1, 2, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

var memoize = function(func) {
  var cache = {};

  return function() {
    var innerArgs = [].slice.call(arguments).join(",");

    if (!cache[innerArgs]) {
      cache[innerArgs] = func.apply(this, arguments);
    }
    return cache[innerArgs];
  };
}

var runSteps = memoize(function(height) {
  if (height < 0) {
    return 0;
  }
  if (height === 0) {
    return 1;
  }
  return runSteps(height - 1) + runSteps(height - 2) + runSteps(height - 3);
});


// What if the input was height and max number of height to be skipped (i.e., if k = 8, you can take 1...8 steps)

var runStepsKSteps = memoize(function(height, k) {
  if (height < 0) {
    return 0;
  }
  if (height === 0) {
    return 1;
  }
  var sum = 0;
  for (var i = 0; i < k; i++) {
    sum += runSteps (height - i);
  }
  return sum;
});

console.log(runStepsKSteps(5, 5));
