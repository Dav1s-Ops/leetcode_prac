def min_value(nums)
  min = Float::INFINITY

  nums.each do |num|
    if num < min
      min = num
    end
  end

  puts min
end


min_value([4, 7, 2, 8, 10, 9]) 
min_value([10, 5, 40, 40.3])
min_value([-5, -2, -1, -11]) 
min_value([42])
min_value([1000, 8])
min_value([1000, 8, 9000])
min_value([2, 5, 1, 1, 4]) 