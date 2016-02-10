// 11.1 You are given two sorted arrays, A and B, and A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order.

// There are no buffers in JS, so here's a modified version:

// (Modified) 11.1 You are given N sorted arrays. Write a method to merge them into one in sorted order.

var BinaryHeap = require('./binaryHeap.js').BinaryHeap;

// K sorted arrays of size n each.
var arr1 = [1, 3, 5, 7];
var arr2 = [2, 4, 6, 111];
var arr3 = [0, 9, 10, 11];

var merge = function() {
  var args = [].slice.call(arguments);
  var result = [];
  var minHeap = new BinaryHeap();
  var totalLength = 0;

  //  All the loops are O(nk)
  for (var i = 0; i < args.length; i++) { // O (k)
    totalLength += args[i].length;
    for (var j = 0; j < args[i].length; j++) { // O(n);
      minHeap.insert(args[i][j]);
    }
  }

  // This is O(nk)
  while (result.length < totalLength) {
    // This is O(log (nk))
    result.push(minHeap.removeRoot());
  }
  return result;

};

// Total complexity is O(nk) + O(nk lg (nk)) => O (nk lg (nk))

console.log(merge(arr1, arr2, arr3));
