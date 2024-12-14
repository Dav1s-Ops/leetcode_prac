def five_sort(nums)
  i = 0
  j = nums.length - 1

  while (i < j) 
    if nums[j] == 5
      j -= 1
    elsif nums[i] == 5
      temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp 
      i += 1
    else 
      i += 1
    end
  end

  nums
end

puts five_sort([12, 5, 1, 5, 12, 7]).inspect
# -> [12, 7, 1, 12, 5, 5]

puts five_sort([5, 5, 5]).inspect
# -> [5, 5, 5] (all fives stay in place)

puts five_sort([1, 2, 3]).inspect
# -> [1, 2, 3] (no fives to move)

puts five_sort([5, 2, 3, 5]).inspect
# -> [3, 2, 5, 5]

puts five_sort([5, 1, 5, 5, 4]).inspect
# -> [4, 1, 5, 5, 5]

puts five_sort([0, 5, 5, 7, 5, 9, 5]).inspect
# -> [0, 9, 7, 5, 5, 5, 5]
