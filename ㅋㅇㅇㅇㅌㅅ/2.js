function solution(s) {
  const ans = [];

  let str = s.split(/{|}/).filter(e => {
    return e !== '' && e !== ',';
  }).map(e => e.split(',').map(e => +e));

  str.sort((a, b) => {
    return a.length < b.length ? 0 : 1;
  })

  if (str.length === 1) return str[0];

  ans.push(str[0][0]);

  for (let i = 1; i < str.length; i++) {
    ans.push(str[i].reduce((a, b) => a + b) - str[i - 1].reduce((a, b) => a + b))
  }

  return ans;
}

// console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
// console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
// console.log(solution("{{20,111},{111}}"));
// console.log(solution("{{123}}"));

// console.log(solution("{{90, 100, 10},{100, 10},{10}}"));