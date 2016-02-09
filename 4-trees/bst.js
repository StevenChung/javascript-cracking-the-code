var BinarySearchTree = function() {
  this.root = null;
  this.size = 0;
};

var Node = function(value) {
  this.value = value;
  this.left = this.left || null;
  this.right = this.right || null;
};

BinarySearchTree.prototype.insert = function(node, current) {
  if (!node || !(node instanceof Node)) {
    this.size++;
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

BinarySearchTree.prototype.preorder = function(callback) {
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

BinarySearchTree.prototype.inorder = function(callback) {
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

BinarySearchTree.prototype.postorder = function(callback) {
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

BinarySearchTree.prototype.contains = function(targetVal) {
  if (!this.root) return false;

  var recurse = function(node) {
    if (!node) {
      return false;
    }
    if (node.value === targetVal) {
      return true;
    }
    if (node.value > targetVal) {
      return recurse(node.left);
    }
    if (node.value < targetVal) {
      return recurse(node.right);
    }
  };
  return recurse(this.root);
};

var exampleTree = new BinarySearchTree();
exampleTree.insert(4);
exampleTree.insert(2);
exampleTree.insert(3);
exampleTree.insert(1);
exampleTree.insert(6);
exampleTree.insert(7);
exampleTree.insert(5);

module.exports.BinarySearchTree = BinarySearchTree;
module.exports.exampleTree = exampleTree;
