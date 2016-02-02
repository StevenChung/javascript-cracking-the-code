// // Return all subsets of a set.

var getSubsets = function(arr) {
  return arr.reduceRight(function(acc, current) {
    console.log('acc =', acc);
    return acc.concat(acc.map(function(item) {
      return [current].concat(item);
    }));
  }, [
    []
  ]);
};

console.log(getSubsets([1, 2, 3])); // [], [1], [2], [3], [1,2], [1,3], [2,3]
// console.log(getSubsets([1, 2])); // [], [2], [1], [2,1]
// console.log(getSubsets([1])) // [], [1]
// console.log(getSubsets([1, 2, 3, 4])) // first + [1,2,3,4], [1,4], [2,4], [3,4], [1,2,4]...
