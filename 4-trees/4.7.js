// 4.7 Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.

var BinarySearchTree = require('./bst.js').BinarySearchTree;

var exampleTree = require('./bst.js').exampleTree;

var contains = function(root, node) {
  if (!root) return false;
  if (root.value === node.value) return true;
  else {
    return contains(root.left, node) || contains(root.right, node);
  }
};

BinarySearchTree.prototype.findCommonAncestor = function(node1, node2) {
  if (!this.root) {
    return null;
  }
  var recurse = function(root, left, right) {
    var isOnLeft = contains(root.left, left);
    var isOnRight = contains(root.right, right);
    if (isOnLeft && isOnRight) {
      return root;
    }
    if (isOnLeft && !isOnRight) {
      return recurse(root.left, left, right);
    }
    if (!isOnLeft && isOnRight) {
      return recurse(root.right, left, right);
    }
  };
  return recurse(this.root, node1, node2);
};

console.log(exampleTree.findCommonAncestor(exampleTree.root.left.left, exampleTree.root.left.right));
