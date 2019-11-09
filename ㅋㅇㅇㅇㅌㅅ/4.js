function solution(k, room_number) {
  const ans = [];
  const rooms = [-1];

  for (let i = 1; i <= k; i++) {
    rooms[i] = 0;
  }

  room_number.forEach(num => {
    if (rooms[num] === 0) {
      ans[ans.length] = num;
      rooms[num] = 1;
    } else if (rooms[num] === 1) { // 이미 방이 찼으면
      for (let i = num + 1; i <= k; i++) {
        if (rooms[i] === 1) continue;
        else {
          ans[ans.length] = i;
          rooms[i] = 1;
          break;
        }
      }
    }
  });

  return ans;
}

console.log(solution(10, [1, 3, 4, 1, 3, 1])); // [1,3,4,2,5,6]