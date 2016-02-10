var BinaryHeap = function() {
  this._heap = [];
};

BinaryHeap.prototype.compareMin = function(i, j) {
  return i < j;
};

BinaryHeap.prototype.compareMax = function(i, j) {
  return i > j;
};

BinaryHeap.prototype.getRoot = function() {
  return this._heap[0];
};

BinaryHeap.prototype.insert = function(value) {
  this._heap.push(value);
  var index = this._heap.length - 1;
  var parentIndex = Math.floor((index - 1) / 2);
  this.percolateUp(index, parentIndex);
};

BinaryHeap.prototype.percolateUp = function(index, parentIndex) {
  while (index > 0 && (this._heap[index] < this._heap[parentIndex])) {
    this.swap(index, parentIndex);
    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2);
  }
};

BinaryHeap.prototype.percolateDown = function(index) {
  var leftChild = index * 2 + 1;
  var rightChild = index * 2 + 2;
  if (this._heap[rightChild] === undefined) {
    minChild = leftChild;
  } else {
    minChild = this._heap[leftChild] < this._heap[rightChild] ? leftChild : rightChild;
  }
  while (index < this._heap.length && this._heap[minChild] < this._heap[index]) {
    this.swap(minChild, index);
    index = minChild;
    leftChild = index * 2 + 1;
    rightChild = index * 2 + 2;
    minChild = this._heap[leftChild] < this._heap[rightChild] ? leftChild : rightChild;
  }
};

BinaryHeap.prototype.swap = function(i, j) {
  var temp = this._heap[i];
  this._heap[i] = this._heap[j];
  this._heap[j] = temp;
};

BinaryHeap.prototype.removeRoot = function() {
  this.swap(0, this._heap.length - 1);
  var head = this._heap.pop();
  this.percolateDown(0);
  return head;
};

var bh = new BinaryHeap();
bh.insert(5);
bh.insert(4);
bh.insert(6);
bh.insert(3);

module.exports.BinaryHeap = BinaryHeap;
