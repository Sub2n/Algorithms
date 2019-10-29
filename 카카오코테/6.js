let ans = 987654321;

function recursive(n, weak, dist, cur, arr) {
  if (cur >= weak.length) {
    // arr 에 대해서 dist로 커버 가능한지 보기
    const arrCopy = arr.slice();
    arrCopy.sort((a, b) => a < b ? 1 : a === b ? 0 : -1);

    if (arrCopy.length <= dist.length) {
      for (let i = 0; i < arrCopy.length; i++) {
        if (arrCopy[i] > dist[i]) return;
      }

      if (ans > arrCopy.length) {
        ans = arrCopy.length;
        console.log(arrCopy);
      }
    }


    return;
  }

  for (let i = cur; i < weak.length; i++) {
    let newDist = weak[i] - weak[cur];
    if (newDist < 0) {
      newDist += n;
    }

    arr.push(newDist);
    recursive(n, weak, dist, i + 1, arr);
    arr.pop();
  }
}

function solution(n, weak, dist) {
  dist.sort((a, b) => a < b ? 1 : a === b ? 0 : -1);
  for (let i = 0; i < weak.length; i++) {
    recursive(n, weak, dist, 0, []);
    const w = weak.shift();
    weak.push(w);
  }


  return ans;
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]));
console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]));