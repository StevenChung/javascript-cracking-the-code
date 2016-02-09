var BinarySearchTree = require('./bst.js').BinarySearchTree;
var exampleTree = require('./bst.js').exampleTree;

//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   9

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
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

// tree.DFS(function(node) {
//   console.log('node.value =', node.value);
// })

exampleTree.invertTree();

exampleTree.DFS(function(node) {
  console.log('node.value =', node.value);
});
module.exports = BinarySearchTree.prototype.invertTree;
