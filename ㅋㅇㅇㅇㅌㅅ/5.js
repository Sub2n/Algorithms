function solution(stones, k) {
  let ans = 0;
  let stop = false;

  function move(n) {
    if (n > stones.length - 1) {
      ans += 1;
      return;
    }

    stones[n] -= 1;

    for (let i = 1; i <= k; i++) {
      if (stones[n + i] !== 0) {
        move(n + i);
        return;
      }
    }
    stop = true;
  }

  while (!stop) {
    move(0);
  }

  return ans;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));