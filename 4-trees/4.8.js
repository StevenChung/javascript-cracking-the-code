// 4.8 You have two very large binary trees: T1, with millions of nodes, and T2, with hundreds of nodes. Create an algorithm to decide if T2 is a subtree of T1.

var BinarySearchTree = require('./bst.js').BinarySearchTree;

var exampleTree = require('./bst.js').exampleTree;

BinarySearchTree.prototype.isSubtree = function(subtree) {
  if (!this.root) return false;
  if (!subtree.value) return true;

  var findSmallRoot = function(bigTreeNode) {
    if (!bigTreeNode) {
      return null;
    }
    if (bigTreeNode.value === subtree.value) {
      return bigTreeNode;
    } else {
      return findSmallRoot(bigTreeNode.left) || findSmallRoot(bigTreeNode.right);
    }
  };

  var matchTrees = function(bigTreeNode, subtreeNode) {
    if (bigTreeNode === null && subtreeNode === null) return true;
    if (bigTreeNode === null || subtreeNode === null) return false;
    if (bigTreeNode.value !== subtreeNode.value) return false;
    return matchTrees(bigTreeNode.left, subtreeNode.left) && matchTrees(bigTreeNode.right, subtreeNode.right);
  };

  var smallRootAtBigTree = findSmallRoot(this.root);

  return (smallRootAtBigTree) ? (matchTrees(smallRootAtBigTree, subtree) ? true : false) : false;
};

var notSubtree = {
  value: 6,
  left: null,
  right: null
};

console.log(exampleTree.isSubtree(exampleTree.root.left));
console.log(exampleTree.isSubtree(notSubtree));
console.log(exampleTree.isSubtree(exampleTree.root.left.right));
