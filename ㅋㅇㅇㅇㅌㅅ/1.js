function solution(board, moves) {
  const stack = [];
  let ans = 0;
  const N = board.length;

  function pushToy(toy) {
    if (stack.length === 0) {
      stack.push(toy);
      return;
    }
    const top = stack.pop();
    if (top === toy) {
      ans += 2;
    } else {
      stack.push(top);
      stack.push(toy);
    }
  }

  moves.forEach(order => {
    const index = order - 1;
    for (let i = 0; i < N; i++) {
      if (board[i][index] !== 0) {
        const toy = board[i][index];
        if (toy === 0) return;
        else {
          board[i][index] = 0;
          pushToy(toy);
          return;
        }
      }
    }
  });

  return ans;
}

console.log(solution([
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
], [1, 5, 3, 5, 1, 2, 1, 4]) === 4);