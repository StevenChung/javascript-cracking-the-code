// 4.6 Write an algorithm to find the ‘next’ node (i.e., in-order successor) of a given node in a binary search tree where each node has a link to its parent.

var BinarySearchTree = require('./bst.js').BinarySearchTree;

var exampleTree = require('./bst.js').exampleTree;

var findNextInorder = function(tree, nodeVal) {
  var arr = [];
  var isFound = false;
  var next = -1;
  tree.inorder(function(node) {
    if (isFound) {
      next = node;
      isFound = false;
      return node;
    }
    arr.push(node.value);
    if (node.value === nodeVal) {
      isFound = true;
    }
  });

  return next;
};

console.log(findNextInorder(exampleTree, 4));
