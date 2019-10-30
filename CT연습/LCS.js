// n * m 사이즈의 2D 배열 생성
function NxM2DArr(n, m) {
  const arr = new Array(n);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }

  return arr;
}

function solution(s1, s2) {
  const arr = NxM2DArr(s1.length + 1, s2.length + 1);

  // 앞부분 0으로 초기화
  arr[0][0] = 0;

  for (let i = 1; i < s2.length + 1; i++) {
    arr[0][i] = 0;
  }

  for (let i = 1; i < s1.length + 1; i++) {
    arr[i][0] = 0;
  }

  let max = 0;

  for (let i = 1; i < s1.length + 1; i++) {
    for (let j = 1; j < s2.length + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
        max = Math.max(max, arr[i][j]);
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
      }
    }
  }

  return max;

}

console.log(solution('aabcab', 'bcabac'));
console.log(solution('algorithmjobs', 'jobsalgorithm'));
console.log(solution('apple', 'elppa'));
console.log(solution('abacabacab', 'cbadabcabac'));
console.log(solution('asservsisces', 'sbcdvesatsce'));