const pairProduct = (numbers, targetProduct) => {
  const prevNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetProduct / num;

    if (complement in prevNums) {
      return [prevNums[complement], i];
    }

    prevNums[num] = i;
  }

  return "No pair found";
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([1, 6, 3, 4, 2], 6)); // -> [0, 1]
console.log(pairProduct([2, 4, 1, 6, 5, 3], 12)); // -> [0, 3]
console.log(pairProduct([2, 2, 2, 4], 4)); // -> [0, 1]
console.log(pairProduct([-3, 2, -5, 4], 15)); // -> [0, 2]
console.log(pairProduct([0, 1, 2, 3, 4], 0)); // -> [0, 1]
console.log(pairProduct([100, 200, 300, 400], 80000)); // -> [1, 3]
console.log(pairProduct([1, 1, 1, 1], 1)); // -> [0, 1]
console.log(pairProduct([1, 2, 3, 4], 10)); // -> []
console.log(pairProduct([-4, -2, -8, -1], 8)); // -> [0, 1]
console.log(pairProduct([5, 20], 100)); // -> [0, 1]
console.log(pairProduct([2, 2, 2, 2], 4)); // -> [0, 1]
console.log(pairProduct([-1, 2, 3, -6, 9], -18)); // -> [2, 3]
console.log(pairProduct([3, 5, 7, 11, 13], 15)); // -> [0, 1]
