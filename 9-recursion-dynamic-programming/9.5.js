// 9.5. Write a method to compute all permutations of a string.

var stringPermutations = function(str) {
  var result = [];

  var recurse = function(strSoFar, rest) {
    if (strSoFar.length === str.length) {
      result.push(strSoFar);
      return;
    } else {
      for (var i = 0; i < rest.length; i++) {
        var newSSF = strSoFar + rest[i];
        var newRest = rest.slice(0, i).concat(rest.slice(i + 1));
        recurse(newSSF, newRest);

      }
    }
  };

  recurse('', str);

  return result;
};

console.log(stringPermutations('ABC')); // ABC, ACB, BAC, BCA, CAB, CBA


