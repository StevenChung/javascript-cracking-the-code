var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
};

LinkedList.prototype.add = function(value) {
  var newTail = new Node(value);
  if (!this.head) {
    this.head = newTail;
  }
  if (this.tail) {
    this.tail.next = newTail;
  }
  this.tail = newTail;
  this.size++;
};

LinkedList.prototype.removeHead = function() {

  if (this.head === null) {
    return null;
  }
  var currentHead = this.head;
  this.head = this.head.next;
  this.size--;
  return currentHead.value;
};

LinkedList.prototype.contains = function(target) {
  var node = this.head;
  while (node) {
    if (node.value === target) {
      return true;
    }
    node = node.next;
  }
  return false;
};

module.exports.LinkedList = LinkedList;
