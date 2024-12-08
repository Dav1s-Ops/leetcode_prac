const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const count = {};

  for (let char of s1) {
    if(!(char in count)) {
      count[char] = 0;
    }

    count[char]++;
  }

  for (let char of s2) {
    if (char in count) {
      count[char]--;
    } else {
      return false;
    }
  }

  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }

  return true;
};

console.log(anagrams('restful', 'fluster')); // -> true
console.log(anagrams('listen', 'silent')); // -> true
console.log(anagrams('elbow', 'below')); // -> true
console.log(anagrams('dusty', 'study')); // -> true
console.log(anagrams('night', 'thing')); // -> true
console.log(anagrams('cats', 'tocs')); // -> false
console.log(anagrams('paper', 'reapa')); // -> false
console.log(anagrams('tax', 'taxi')); // -> false
console.log(anagrams('hello', 'hey')); // -> false
console.log(anagrams('race', 'careful')); // -> false
console.log(anagrams('', '')); // -> true
console.log(anagrams('', 'a')); // -> false
console.log(anagrams('a', 'a')); // -> true
console.log(anagrams('a', 'b')); // -> false
console.log(anagrams('anagram', 'anagram')); // -> true
