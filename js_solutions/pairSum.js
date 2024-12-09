const pairSum = (numbers, targetSum) => {
  const prevNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;

    if (complement in prevNums) {
      return [prevNums[complement], i]
    }

    prevNums[num] = i
  }
  console.log(prevNums)
}

console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum([1, 2, 3, 4, 5], 9)); // -> [3, 4]
console.log(pairSum([7, 11, 15, 2], 9));  // -> [0, 3]
console.log(pairSum([4, 6, 10, 15, 16], 21)); // -> [1, 3]
console.log(pairSum([0, 9, 7, 2, 5], 7)); // -> [0, 2]
console.log(pairSum([6, 3, 8, 12, 1], 9)); // -> [0, 1]
console.log(pairSum([1, 3, 5, 7, 9], 10)); // -> [1, 3]
console.log(pairSum([2, 3, 6, 4, 8], 10)); // -> [2, 3]
