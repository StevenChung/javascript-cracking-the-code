// 11.5 Given a sorted array of strings which is interspersed with empty strings, write a method to find the location of a given string.

// Example: find “ball” in ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""] will return 4

// Example: find "ballcar" in ["at", "", "", "", "", "ball", "car", "", "", "dad", "", ""] will return -1


//  NOT FINISHED

var stringSearch = function(arr, target, left, right) {
  left = left || 0;
  right = right || arr.length;
  var mid = Math.floor((left + right) / 2);
  while (left <= right) {
    while (left <= right && arr[right] === "") {
      right--;
    }
    if (right < left) {
      return -1;
    }
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] !== "" && arr[mid] < target) {
      return stringSearch(arr, target, mid, right);
    }
    if (arr[mid] !== "" && arr[mid] > target) {
      return stringSearch(arr, target, 0, mid);
    }
  }
  return null;
};

console.log(stringSearch(["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], "at")); // 4

// console.log(stringSearch(["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], "ballcar")); // -1
