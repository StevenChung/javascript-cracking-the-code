// Use a path array path[] to store current root to leaf path. Traverse from root to all leaves in top-down fashion. While traversing, store data of all nodes in current path in array path[]. When we reach a leaf node, print the path array.

// Time: O(n)


//  NOT FINISHED

var BinarySearchTree = require('./bst.js').BinarySearchTree;
var exampleTree = require('./bst.js').exampleTree;

BinarySearchTree.prototype.printRootToLeaf = function() {
  var temp = [];
  var result = [];

  var recurse = function(node) {
    if (!node) {
      return;
    }
    temp.push(node.value);
    if (!node.left && !node.right) {
      return temp;
    } else {
      console.log(recurse(node.left));
      console.log(recurse(node.right));
    }
  };
  recurse(this.root)

  // recurse(this.root);

  // this.DFS(function(node) {
  //  temp.push(node.value);
  //  if (!node.left && !node.right) {
  //    console.log(temp);
  //    result.push(temp);
  //    temp = [];
  //  }
  // });
  // return result;
};

console.log(exampleTree.printRootToLeaf());
