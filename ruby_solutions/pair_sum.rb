def pair_sum(numbers, target_sum)
  previous_nums = Hash.new(0)

  numbers.each_with_index do |num, i|
    complement = target_sum - num
    return [previous_nums[complement], i] if previous_nums.include?(complement)
    previous_nums[num] = i
  end
end

p pair_sum([3, 2, 5, 4, 1], 8) # -> [0, 2]
p pair_sum([1, 2, 3, 4, 5], 9) # -> [3, 4]
p pair_sum([7, 11, 15, 2], 9)  # -> [0, 3]
p pair_sum([4, 6, 10, 15, 16], 21) # -> [1, 3]
p pair_sum([0, 9, 7, 2, 5], 7) # -> [0, 1]
p pair_sum([6, 3, 8, 12, 1], 9) # -> [0, 1]
p pair_sum([1, 3, 5, 7, 9], 10) # -> [1, 3]
p pair_sum([2, 3, 6, 4, 8], 10) # -> [2, 3]
