// Invert a tree horizontally such that it is a mirror image of the original tree.

var BinarySearchTree = require('./bst.js').BinarySearchTree;
var exampleTree = require('./bst.js').exampleTree;

//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   9

BinarySearchTree.prototype.invertTree = function(node) {
  if (!this.root) {
    return null;
  }
  node = node || this.root;
  if (!node.left || !node.right) {
    return;
  } else {
    var temp = node.left;
    node.left = node.right;
    node.right = temp;
    this.invertTree(node.left);
    this.invertTree(node.right);
  }
};

exampleTree.invertTree();

exampleTree.DFS(function(node) {
  console.log('node.value =', node.value);
});
module.exports = BinarySearchTree.prototype.invertTree;
