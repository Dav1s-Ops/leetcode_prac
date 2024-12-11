def uncompress(s)
  result = ''
  i = 0

  while i < s.length
    num = ''
    while i < s.length && ('0'..'9').include?(s[i])
      num += s[i]
      i += 1
    end

    char = s[i]
    i += 1

    result += char * num.to_i
  end

  result
end

puts uncompress("2c3a1t") # -> 'ccaaat'
puts uncompress("4x2y1z") # -> 'xxxxyyz'
puts uncompress("3h5e2l1o") # -> 'hhheeeeeloo'
puts uncompress("1a1b1c1d") # -> 'abcd'
puts uncompress("10z") # -> 'zzzzzzzzzz'
puts uncompress("0m2n3o") # -> 'nnooo'
