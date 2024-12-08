const mostFrequentChar = (s) => {
  const count = {};
  let mostFreq = ''

  for (let char of s) {
    if(!(char in count)) {
      count[char] = 0;
    }
    count[char]++;
  }

  for (let char in count) {
    if (!mostFreq || count[char] > count[mostFreq]) {
    mostFreq = char;
    }
  }

  return mostFreq
};

console.log(mostFrequentChar('mississippi')); // -> 'i'
console.log(mostFrequentChar('hello')); // -> 'l'
console.log(mostFrequentChar('banana')); // -> 'a'
console.log(mostFrequentChar('abcabcabc')); // -> 'a' (or 'b' or 'c', depending on iteration order in case of ties)
console.log(mostFrequentChar('')); // -> null
console.log(mostFrequentChar('a'.repeat(1000) + 'b'.repeat(999))); // -> 'a'
console.log(mostFrequentChar('abcd'.repeat(100) + 'e'.repeat(200))); // -> 'e'

// Time: O(n)
// Space: O(n)