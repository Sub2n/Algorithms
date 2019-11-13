function solution(s) {
  let numberExt = s.replace(/[^0-9,]/g, "");

  let num = numberExt.split(',');
  if (num.length === 1) return [+num[0]];

  let hashed = {};
  num.forEach(n => {
    hashed[n] = hashed[n] ? hashed[n] + 1 : 1
  });

  let hashedArr = [];

  for (let key in hashed) {
    hashedArr.push({
      key,
      count: hashed[key]
    });
  }

  return hashedArr.sort((a, b) => b.count - a.count).map(({
    key
  }) => +key);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));

// console.log(solution("{{90, 100, 10},{100, 10},{10}}"));