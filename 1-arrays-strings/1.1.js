// 1.1 Implement an algorithm to determine if a string has all unique characters
var isUnique = function(str) {
  var cache = {};
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (!cache.hasOwnProperty(letter)) {
      cache[letter] = 0;
    }
    cache[letter]++;

    if (cache[letter] > 1) {
      return false;
    }
  }
  return true;
};

// What if you can not use additional data structures?
