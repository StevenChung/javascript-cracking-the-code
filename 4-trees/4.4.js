// 4.4 Given a binary search tree, design an algorithm which creates a linked list of all the nodes at each depth (i.e., if you have a tree with depth D, you’ll have D linked lists).

//  UNFINISHED

var BinarySearchTree = require('./bst.js').BinarySearchTree;
var exampleTree = require('./bst.js').exampleTree;

var LinkedList = require('../3-linked-lists/linkedList.js').LinkedList;

var bstToLinkedLists = function(tree) {
  var result = [];
  var current = new LinkedList();

  if (tree.root) {
    current.add(tree.root);
  }

  // var counter = Array(tree.size).fill(1).map(function(value, key) {

  // });

  var counter = 0;

  tree.BFS(function(node) {
    var temp = [];
    if (counter = something) {
      result.push(temp)
    } else {
      LL.add(node.value);
    }
  })

  return result;

};

console.log(bstToLinkedLists(exampleTree));
