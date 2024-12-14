const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    } else {
      i++;
    }
  }

  return nums;
}

console.log(fiveSort([12, 5, 1, 5, 12, 7]));
// -> [12, 7, 1, 12, 5, 5]

console.log(fiveSort([5, 5, 5]));
// -> [5, 5, 5] (all fives stay in place)

console.log(fiveSort([1, 2, 3]));
// -> [1, 2, 3] (no fives to move)

console.log(fiveSort([5, 2, 3, 5]));
// -> [3, 2, 5, 5]

console.log(fiveSort([5, 1, 5, 5, 4]));
// -> [4, 1, 5, 5, 5]

console.log(fiveSort([0, 5, 5, 7, 5, 9, 5]));
// -> [0, 9, 7, 5, 5, 5, 5]