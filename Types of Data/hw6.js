// Task 1

function unique(arr) {
  let uniqueSet = Array.from(new Set(arr));
  return uniqueSet;
}

//Task 2

// Task 3
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
