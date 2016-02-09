// 4.4 Given a binary search tree, design an algorithm which creates a linked list of all the nodes at each depth (i.e., if you have a tree with depth D, you’ll have D linked lists).

var BinarySearchTree = require('./bst.js').BinarySearchTree;
var exampleTree = require('./bst.js').exampleTree;

var LinkedList = require('../3-linked-lists/linkedList.js').LinkedList;

var bstToLinkedLists = function(tree) {
  var result = [];
  var current = new LinkedList();

  var currentHeight = 0;

  tree.BFS(function(node) {
    if (node.height === currentHeight) {
      current.add(node.value);
    } else {
      result.push(current);
      current = new LinkedList();
      current.add(node.value);
      currentHeight++;
    }
  });
  result.push(current);
  return result;
};

console.log(bstToLinkedLists(exampleTree));
