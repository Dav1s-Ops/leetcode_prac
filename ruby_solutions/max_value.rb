def max_value(nums)
  max = -Float::INFINITY

  nums.each do |num|
    if num > max
      max = num
    end
  end

  puts max
end

max_value([4, 7, 2, 8, 10, 9]) 
max_value([10, 5, 40, 40.3])
max_value([-5, -2, -1, -11]) 
max_value([42])
max_value([1000, 8])
max_value([1000, 8, 9000])
max_value([2, 5, 1, 1, 4]) 


# Time: O(n) linear
# Space: O(1) constant