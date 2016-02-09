// Given a sorted (increasing order) array, write an algorithm to create a binary tree with minimal height

var BinarySearchTree = require('./bst.js').BinarySearchTree;

var createBST = function(arr) {
  var tree = new BinarySearchTree();

  var recurse = function(arr) {
    if (!arr.length) {
      return;
    }
    var mid = Math.floor(arr.length / 2);
    var left = 0;
    var right = arr.length;

    tree.insert(arr[mid]);
    arr.splice(mid, 1);
    recurse(arr.slice(0, mid));
    recurse(arr.slice(mid));
  };
  recurse(arr);
  return tree;

};

console.log(createBST([0, 1, 2, 3, 4, 5, 6]).root);
