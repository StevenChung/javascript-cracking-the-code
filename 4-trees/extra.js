// Use a path array path[] to store current root to leaf path. Traverse from root to all leaves in top-down fashion. While traversing, store data of all nodes in current path in array path[]. When we reach a leaf node, print the path array.

// Time: O(n)


var BinarySearchTree = require('./bst.js').BinarySearchTree;
var exampleTree = require('./bst.js').exampleTree;

BinarySearchTree.prototype.printRootToLeaf = function() {

};

console.log(exampleTree.printRootToLeaf());
