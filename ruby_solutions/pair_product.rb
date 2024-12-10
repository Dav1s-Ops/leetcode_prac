def pair_product(numbers, target_product)
  prevNums = {}
  target_f = target_product.to_f
  
  numbers.each_with_index do |num, i|
    num_f = num.to_f
    complement = target_f / num_f

    return [prevNums[complement], i] if prevNums.include?(complement)
    prevNums[num_f] = i
  end

  "No pair found"
end

p pair_product([3, 2, 5, 4, 1], 8) # -> [1, 3]
p pair_product([1, 6, 3, 4, 2], 6) # -> [0, 1]
p pair_product([2, 4, 1, 6, 5, 3], 12) # -> [0, 3]
p pair_product([2, 2, 2, 4], 4) # -> [0, 1]
p pair_product([-3, 2, -5, 4], 15) # -> [0, 2]
p pair_product([100, 200, 300, 400], 80000) # -> [1, 3]
p pair_product([1, 1, 1, 1], 1) # -> [0, 1]
p pair_product([-4, -2, -8, -1], 8) # -> [0, 1]
p pair_product([5, 20], 100) # -> [0, 1]
p pair_product([2, 2, 2, 2], 4) # -> [0, 1]
p pair_product([-1, 2, 3, -6, 9], -18) # -> [2, 3]
p pair_product([3, 5, 7, 11, 13], 15) # -> [0, 1]
p pair_product([1, 2, 3, 4], 10) # -> "No pair found"
