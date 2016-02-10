// 11.3 Given a sorted array of n integers that has been rotated an unknown number of times, give an O(log n) algorithm that finds an element in the array. You may assume that the array was originally sorted in increasing order.

// EXAMPLE:

// Input: find 5 in array [15 16 19 20 25 1 3 4 5 7 10 14]

// Output: 8 (the index of 5 in the array)

var findPivot = function(arr, low, high) {
  if (high < low) return null;
  if (high === low) return low;
  var mid = Math.floor((low + high) / 2);
  if (mid < high && arr[mid] > arr[mid + 1]) {
    return mid;
  }
  if (mid > low && arr[mid] < arr[mid - 1]) {
    return mid - 1;
  }
  if (arr[low] >= arr[mid]) {
    return findPivot(arr, low, mid - 1);
  }
  return findPivot(arr, mid + 1, high);
};

var binarySearch = function(arr, target) {
  var mid = Math.floor(arr.length / 2);
  var left = 0;
  var right = arr.length;

  while (left < right) {
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      return binarySearch(arr.slice(0, mid), target);
    } else if (target > arr[mid]) {
      return mid + binarySearch(arr.slice(mid), target);
    }
  }
};

var rotatedArraySearch = function(arr, target) {
  // find pivot of rotation
  var pivot = findPivot(arr, 0, arr.length - 1);
  if (arr[0] > target) {
    return pivot + 1 + binarySearch(arr.slice(pivot + 1), target);
  } else {
    return binarySearch(arr.slice(0, pivot + 1), target);
  }
};

console.log(rotatedArraySearch([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 14));
