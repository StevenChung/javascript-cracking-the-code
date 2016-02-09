// 4.9 You are given a binary tree in which each node contains a value. Design an algorithm to print all paths which sum up to that value. Note that it can be any path in the tree - it does not have to start at the root.

var BinarySearchTree = require('./bst.js').BinarySearchTree;


BinarySearchTree.prototype.printPathsOfSum = function(targetSum) {

};


var exampleTree = new BinarySearchTree();
exampleTree.insert(3);
exampleTree.insert(-1);
exampleTree.insert(2);
exampleTree.insert(1);
exampleTree.insert(5);
console.log('exampleTree =', exampleTree);

// exampleTree.printPathsOfSum()


