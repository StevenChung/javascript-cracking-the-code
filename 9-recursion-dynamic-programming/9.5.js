// 9.5. Write a method to compute all permutations of a string.

//  NOT FINISHED

var stringPermutations = function(str) {
  var result = [];

  var recurse = function(strSoFar, rest) {
    if (strSoFar.length === str.length) {
      result.push(strSoFar);
      return;
    } else {
      for (var i = 0; i < rest.length; i++) {
        var strSoFar =
          letter = str[i];
        rest = str.slice(0, i).concat(str.slice(i + 1));

      }

    }
  };

  recurse(0, '');

  return result;
};

console.log(stringPermutations('abc')); // ABC, ACB, BAC, BCA, CAB, CBA

console.log(Array.apply(null, {
  length: 5
}).map(Number.call, Number));

