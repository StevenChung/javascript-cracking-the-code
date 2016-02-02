// A magic index in an array A[1 ... n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

var findMagicIndex = function(arr) {

  var recurse = function(start, end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] === mid) {
      return mid;
    } else if (arr[mid] < mid) {
      return recurse(mid, end);
    } else if (arr[mid] > mid) {
      return recurse(start, mid);
    } else {
      return null;
    }
  };

  return recurse(0, arr.length - 1);
};

console.log(findMagicIndex([-1, 0, 1, 3, 4])); // 3
console.log(findMagicIndex([-5, -1, 0, 3, 6])); // 3

// FOLLOW UP: WHat if the values are not distinct?

var findMagicIndexNotDistinct = function(arr) {

};
// console.log(findMagicIndexNotDistinct([1, 2, 3, 3])); // 3
// console.log(findMagicIndexNotDistinct([1, 2, 3, 4, 5, 5, 7, 8])); // 5
// console.log(findMagicIndexNotDistinct([-3, -2, -1, 0, 4, 7])); // 4
// console.log(findMagicIndexNotDistinct([4, 4, 4, 4, 4, 4])); // 4
