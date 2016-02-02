// 4.1 Implement a function to check if a tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one

// var tree = require('./bst.js').tree;
var BinarySearchTree = require('./bst.js').BinarySearchTree;

// get Height
BinarySearchTree.prototype.getHeight = function(node) {
  var left = right = 0;

  var recurse = function(node) {
    if (!node.left && !node.right) {
      return 1;
    }
    if (node.left) {
      left = 1 + recurse(node.left);
    }
    if (node.right) {
      right = 1 + recurse(node.right);
    }
    return Math.max(left, right);
  };

  return (node) ? recurse(node) : 0;
};


BinarySearchTree.prototype.isBalanced = function() {
  var left = this.getHeight(this.root.left);
  var right = this.getHeight(this.root.right);

  return (Math.abs(left - right) <= 1);
};

// var tree = new BinarySearchTree();
// tree.insert(1);
// tree.insert(2);
// tree.insert(3);
// tree.insert(4);
// tree.insert(5);
// tree.insert(6);
// tree.insert(7);

// console.log(tree.isBalanced())
