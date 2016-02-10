// 4.5 Implement a function to check if a binary tree is a binary search tree.

// Do Inorder traversal
var BinarySearchTree = require('./bst.js').BinarySearchTree;
var exampleTree = require('./bst.js').exampleTree;

// if the numbers are sorted, then good!

var isBST = function(tree) {
  var lastNum;
  var isBST = true;
  tree.inorder(function(node) {
    if (lastNum === undefined) {
      lastNum = node.value;
    } else {
      if (!isBST || lastNum > node.value) {
        isBST = false;
      }
    }
  });
  return isBST;
};

console.log(isBST(exampleTree));

var notTree = {
  root: {
    value: 4,
    left: {
      value: 2,
      left: null,
      right: null,
      height: 1
    },
    right: {
      value: 6,
      left: null,
      right: null,
      height: 1
    },
    height: 0
  },
  size: 7
};

console.log(isBST(notTree));

// Need to create a Binary Tree constructor to be able to test this out really.
