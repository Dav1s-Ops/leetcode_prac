def most_frequent_char(s)
  return nil if s.empty?

  count = Hash.new(0)
  most_freq = nil

  s.each_char do |char|
    next if char == ' '
    count[char] += 1
  end

  count.each do |char, freq|
    if !most_freq || freq > count[most_freq]
      most_freq = char
    end
  end

  most_freq
end

puts most_frequent_char('a')             # -> 'a'
puts most_frequent_char('z')             # -> 'z'
puts most_frequent_char('abcd')          # -> 'a' (or any character, since all are equally frequent)
puts most_frequent_char('!!@@##$$%%^^&&&&') # -> '&'
puts most_frequent_char('a b c a b!')    # -> 'a'
