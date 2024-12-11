const uncompress = (s) => {
  const validNums = '0123456789';
  let result = '';
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (validNums.includes(s[j])) {
      j++;
    } else {
      let num = s.slice(i, j)
      for (let count = 0; count < num; count++) {
        result += s[j];
      }
      j++;
      i = j;
    }
  }

  console.log(result)
}

uncompress("2c3a1t"); // -> 'ccaaat'
uncompress("4x2y1z"); // -> 'xxxxyyz'
uncompress("3h5e2l1o"); // -> 'hhheeeeeloo'
uncompress("1a1b1c1d"); // -> 'abcd'
uncompress("10z"); // -> 'zzzzzzzzzz'
uncompress("0m2n3o"); // -> 'nnooo'
uncompress("1a0b1c"); // -> 'ac'
uncompress("2p2q2r"); // -> 'ppqqrr'
uncompress("5a3b2c1d"); // -> 'aaaaabbbccd'
uncompress("1z"); // -> 'z'
uncompress("100x"); // -> 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
uncompress("0z1a"); // -> 'a'
