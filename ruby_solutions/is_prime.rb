def is_prime(num)
  return false if num <= 1

  for i in 2..Math.sqrt(num).to_i
    return false if num % i == 0
  end

  true
end

puts is_prime(2)
puts is_prime(3)
puts is_prime(4)
puts is_prime(5)
puts is_prime(6)
puts is_prime(7)
puts is_prime(8)
puts is_prime(25)
puts is_prime(31)
puts is_prime(2017)
puts is_prime(2048)
puts is_prime(1)
puts is_prime(713)

# Time: O(n/2)