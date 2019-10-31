// n이 3의 거듭제곱 숫자를 중복 없이 더해서 만들 수 있는지 return
function solution(n) {
  while (n > 0) {
    if (n % 3 === 2) return false;
    else n = Math.floor(n / 3);
  }
  return true;
}

console.log(solution(36))
console.log(solution(120))
console.log(solution(278))