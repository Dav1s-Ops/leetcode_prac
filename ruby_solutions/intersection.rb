def intersection(a, b)
  setA = Set.new(a)
  result = Array.new

  b.each do |num|
    result.push(num) if setA.include?(num)
  end

  result
end

puts intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]).inspect  # -> [2, 6]
puts intersection([1, 2, 3], [4, 5, 6]).inspect           # -> []
puts intersection(['a', 'b', 'c'], ['b', 'c', 'd']).inspect# -> ["b", "c"]
puts intersection([true, false, 'x'], [false, 'x', 'y']).inspect# -> [false, "x"]
puts intersection([1, 2, 2, 3], [2, 2, 4]).inspect# -> [2, 2]
puts intersection([], [1, 2, 3]).inspect# -> []