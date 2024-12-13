const intersection = (a, b) => {
  let result = [];
  const setA = new Set(a)

  for (let num of b) {
    if (setA.has(num)) {
      result.push(num)
    }
  }
  return result;
}

// Test Cases
console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]));  // -> [2, 6]
console.log(intersection([1, 2, 3], [4, 5, 6]));  // -> [] (no overlapping elements)
console.log(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])); // -> ['b', 'c'] (strings intersection)
console.log(intersection([true, false, 'x'], [false, 'x', 'y'])); // -> [false, 'x'] (mixed types)
console.log(intersection([1, 2, 2, 3], [2, 2, 4])); // -> [2, 2] (duplicates are kept if they appear in both arrays)
console.log(intersection([], [1, 2, 3])); // -> [] (empty array intersection is always empty)
console.log(intersection([null, undefined, 0], [undefined, 0, false])); // -> [undefined, 0]