// 11.5 Given a sorted array of strings which is interspersed with empty strings, write a method to find the location of a given string.

// Example: find “ball” in ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""] will return 4

// Example: find "ballcar" in ["at", "", "", "", "", "ball", "car", "", "", "dad", "", ""] will return -1

var stringSearch = function(arr, target) {
};

console.log(stringSearch(["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], "at")); // 4

console.log(stringSearch(["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], "ballcar")); // -1
