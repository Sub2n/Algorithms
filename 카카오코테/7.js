function solution(board) {
  let minTime = 987654321;
  const N = board.length;

  board.unshift([]);
  for (let i = 1; i <= N; i++) board[i].unshift(0);

  const queue = [];

  queue.push([1, 1, 0, 0]);

  let visited = [];
  for (let i = 1; i <= N; i++) {
    visited[i] = [];
    for (let j = 1; j <= N; j++) {
      visited[i][j] = [];

      visited[i][j][0] = -1;
      visited[i][j][1] = -1;
    }
  }

  while (queue.length !== 0) {
    const current = queue.shift();

    const y = current[0];
    const x = current[1];
    const acc = current[3];

    if (visited[y][x][current[2]] !== -1 && acc > visited[y][x][current[2]]) {
      continue;
    }

    visited[y][x][current[2]] = acc;

    if (current[2] === 0) {
      // 가로상태이면
      if (y === N && x === N - 1) {
        minTime = minTime > acc ? acc : minTime;
        continue;
      }
      landMove(y, x, acc);
    } else {
      // 세로 상태면
      if (y === N - 1 && x === N) {
        minTime = minTime > acc ? acc : minTime;
        continue;
      }
      portMove(y, x, acc);
    }
  }

  function landMove(y, x, acc) {
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < 4; i++) {
      const newY = y + dir[i][0];
      const newX = x + dir[i][1];

      if (
        1 <= newY &&
        newY <= N &&
        (1 <= newX && newX + 1 <= N) &&
        (board[newY][newX] !== -1 && board[newY][newX + 1] !== -1)
      ) {
        acc += 1;
        queue.push([newY, newX, 0, acc]);
        console.log(newY, newX);
      }
    }

    const dir2 = [[0, 1, 1, 0], [-1, 1, -1, 0], [0, 0, 1, 1], [-1, 0, -1, 1]];

    for (let i = 0; i < 4; i++) {
      const newY = y + dir2[i][0];
      const newX = x + dir2[i][1];

      const checkY = y + dir2[i][2];
      const checkX = x + dir2[i][3];

      if (
        1 <= newY &&
        newY + 1 <= N &&
        (1 <= newX && newX <= N) &&
        (board[newY][newX] !== -1 && board[newY + 1][newX] !== -1) &&
        board[checkY][checkX] !== -1
      ) {
        acc += 1;
        queue.push([newY, newX, 1, acc]);
      }
    }
  }

  function portMove(y, x, acc) {
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < 4; i++) {
      const newY = y + dir[i][0];
      const newX = x + dir[i][1];

      if (
        1 <= newY &&
        newY + 1 <= N &&
        (1 <= newX && newX <= N) &&
        (board[newY][newX] !== -1 && board[newY + 1][newX] !== -1)
      ) {
        acc += 1;
        queue.push([newY, newX, 1, acc]);
      }
    }

    const dir2 = [[0, 0, 1, 1], [0, -1, 1, -1], [1, -1, 0, -1], [1, 0, 0, 1]];

    for (let i = 0; i < 4; i++) {
      const newY = y + dir2[i][0];
      const newX = x + dir2[i][1];

      const checkY = y + dir2[i][2];
      const checkX = x + dir2[i][3];

      if (
        1 <= newY &&
        newY <= N &&
        (1 <= newX && newX + 1 <= N) &&
        (board[newY][newX] !== -1 && board[newY][newX + 1] !== -1) &&
        board[checkY][checkX] !== -1
      ) {
        acc += 1;
        queue.push([newY, newX, 0, acc]);
      }
    }
  }

  console.log(minTime);
  return minTime;
}

// console.log('result: ', solution([[0, 0], [0, 0]]) === 1);

console.log(
  'test1 result: ',
  solution([
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ]) === 7
);
