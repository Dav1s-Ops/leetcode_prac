def compress(s)
  result = ''
  i = 0
  j = 0

  while j <= s.length do
    if s[i] == s[j]
      j += 1
    else
      num = j - i
      char = s[i]

      unless num <= 1
        result += num.to_s
      end

      result += s[i]

      i = j
    end
  end

  result
end

# Test cases
puts compress('ccaaatsss')          # -> '2c3at3s'
puts compress('aaaaabbbccccdd')     # -> '5a3b4c2d'
puts compress('xyz')                # -> 'xyz'
puts compress('a')                  # -> 'a'
puts compress('aa')                 # -> '2a'
puts compress('aabcccccaaa')        # -> '2a1b5c3a'
puts compress('abcdabcd')           # -> 'abcdabcd' # no repeated characters to compress
puts compress('ppppqqqrrrsstttt')   # -> '4p3q3r2s4t'
puts compress('')                   # -> '' # empty string
puts compress('1122334455')         # -> '21122334455'
puts compress('sshhhhhhooooot')     # -> '2s6h5o1t'
puts compress('zoooommm')           # -> '1z4o3m'
puts compress('kkkkkttttzzzzz')     # -> '5k4t5z'
puts compress('zzzzzzzzzz')         # -> '10z'
