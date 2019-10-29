function solution(s) {
  let minLength = s.length;

  for (let i = 1; i < s.length / 2 + 1; i++) {
    const splitted = [];
    for (let j = 0; j < s.length / i; j++) {
      splitted[j] = s.substr(j * i, i);
    }

    let sameCount = 0;
    const arr = [];
    splitted.reduce((prev, cur) => {
      if (prev === cur) {
        sameCount += 1;
      } else {
        arr.push([prev, sameCount + 1]);
        sameCount = 0;
      }
      return cur;
    });

    arr.push([splitted[splitted.length - 1], sameCount + 1]);

    const result = arr.reduce((acc, cur) => {
      const length = cur[1] === 1 ? 0 : (cur[1] + '').length;
      return acc + cur[0].length + length;
    }, 0);

    minLength = minLength > result ? result : minLength;

  }
  return minLength;
}

console.log('test1 result: ', solution("aabbaccc") === 7);
console.log('test2 result: ', solution("ababcdcdababcdcd") === 9);
console.log('test3 result: ', solution("abcabcdede") === 8);
console.log('test4 result: ', solution("abcabcabcabcdededededede") === 14);
console.log('test5 result: ', solution("xababcdcdababcdcd") === 17);