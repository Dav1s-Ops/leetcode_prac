const compress = (s) => {
  let result = '';
  let i = 0;
  let j = 0;

  while (j <= s.length) {
    if (s[i] === s[j]) {
      j++
    } else {
      let num = j - i
      let char = s[i]

      if (!(num <= 1)) {
        result += num
      }

      result += char

      i = j
    }
  }

  return result;
}

// Test cases
console.log(compress('ccaaatsss'));            // -> '2c3at3s'
console.log(compress('aaaaabbbccccdd'));       // -> '5a3b4c2d'
console.log(compress('xyz'));                 // -> 'xyz'
console.log(compress('a'));                   // -> 'a'
console.log(compress('aa'));                  // -> '2a'
console.log(compress('aabcccccaaa'));         // -> '2a1b5c3a'
console.log(compress('abcdabcd'));            // -> 'abcdabcd' (no repeated characters to compress)
console.log(compress('ppppqqqrrrsstttt'));    // -> '4p3q3r2s4t'
console.log(compress(''));                    // -> '' (empty string)
console.log(compress('1122334455'));          // -> '21122334455'
console.log(compress('sshhhhhhooooot'));      // -> '2s6h5o1t'
console.log(compress('zoooommm'));            // -> 'z4o3m'
console.log(compress('kkkkkttttzzzzz'));      // -> '5k4t5z'
console.log(compress('zzzzzzzzzz'));          // -> '10z'
