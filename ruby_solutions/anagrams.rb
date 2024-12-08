def anagrams(s1, s2)
  count = {}

  s1.each_char do |char|
    count[char] ||= 0
    count[char] += 1
  end

  s2.each_char do |char|
    return false unless count[char]
    count[char] -= 1
    return false if count[char] < 0
  end

  true
end

puts anagrams('restful', 'fluster') # -> true
puts anagrams('cats', 'tocs') # -> false
puts anagrams('monkeyswrite', 'newyorktimes') # -> true
puts anagrams('paper', 'reapa') # -> false
puts anagrams('elbow', 'below') # -> true
puts anagrams('tax', 'taxi') # -> false
puts anagrams('night', 'thing') # -> true
puts anagrams('abbc', 'aabc') # -> false
puts anagrams('po', 'popp') # -> false
puts anagrams('pp', 'oo') # -> false

# Time: O(n + n) -> O(2n) -> O(n)
# Space: O(n)