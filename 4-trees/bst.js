var BinarySearchTree = function() {
  this.root = null;
};

var Node = function(value, parent, left, right) {
  this.value = value;
  this.left = this.left || null;
  this.right = this.right || null;
};

BinarySearchTree.prototype.insert = function(node, current) {
  if (!node || !(node instanceof Node)) {
    node = new Node(node);
  }

  if (!this.root) {
    this.root = node;
    return node;
  }

  current = current || this.root;

  if (node.value < current.value) {
    if (!current.left) {
      current.left = node;
    } else {
      this.insert(node, current.left);
    }
  } else if (node.value > current.value) {
    if (!current.right) {
      current.right = node;
    } else {
      this.insert(node, current.right);
    }
  }
};

BinarySearchTree.prototype.DFS = function(callback) {

  var traverse = function(current) {
    callback(current);
    if (current.left) {
      traverse(current.left);
    }
    if (current.right) {
      traverse(current.right);
    }
  };

  traverse(this.root);
};

BinarySearchTree.prototype.BFS = function(callback) {
  var queue = [];
  queue.unshift(this.root);

  while (queue.length !== 0) {
    var node = queue.shift();
    callback(node);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
};

// In-order

BinarySearchTree.prototype.preorder = function(callback, node) {
  if (!this.root) {
    return null;
  }

  function traverse(node) {
    callback(node);
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(this.root);
};

BinarySearchTree.prototype.inorder = function(callback, node) {
  if (!this.root) {
    return null;
  }

  function traverse(node) {
    if (node.left) {
      traverse(node.left);
    }
    callback(node);
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(this.root);
};

BinarySearchTree.prototype.postorder = function(callback, node) {
  if (!this.root) {
    return null;
  }

  function traverse(node) {
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
    callback(node);
  }
  traverse(this.root);
};

BinarySearchTree.prototype.binarySearch = function(arr, target) {
  var mid = Math.floor(arr.length / 2);
  var left = 0;
  var right = arr.length;

  while (left < right) {
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      return this.binarySearch(arr.slice(0, mid), target);
    } else if (target > arr[mid]) {
      return mid + this.binarySearch(arr.slice(mid), target);
    }
  }
};

var tree = new BinarySearchTree();
tree.insert(4);
tree.insert(2);
tree.insert(3);
tree.insert(1);
tree.insert(6);
tree.insert(7);
tree.insert(5);

module.exports.BinarySearchTree = BinarySearchTree;
module.exports.tree = tree;
