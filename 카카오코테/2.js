function isCorrect(u) {
  const openPrth = [];

  for (let i = 0; i < u.length; i++) {
    if (u[i] === '(') openPrth.push('(');
    if (u[i] === ')') {
      if (openPrth.length === 0) return false;
      openPrth.pop();
    }
  }

  return openPrth.length === 0;
}

function recursive(w) {

  if (!w) return '';

  // 1. u, v로 분리
  // 1-1. u는 가장 먼저 만나는 균형 문자열
  let open = 0;
  let close = 0;
  let vStartIdx = 0;

  for (let i = 0; i < w.length; i++) {
    if (w[i] === '(') open += 1;
    if (w[i] === ')') close += 1;
    if (open === close) {
      vStartIdx = i + 1;
      break;
    }
  }

  const u = w.substring(0, vStartIdx);
  const v = w.substring(vStartIdx);

  if (isCorrect(u)) {
    return u + recursive(v);
  } else {
    return `(${recursive(v)})` + u.substring(1, u.length - 1).split('').map(ch => ch === '(' ? ')' : '(').join('');
  }

}

function solution(p) {
  const answer = recursive(p);
  return answer;
}


// console.log('result: ', solution("()") === "()");

// console.log('test1 result: ', solution("(()())()") === "(()())()");
// console.log('test2 result: ', solution(")(") === "()");
// console.log('test3 result: ', solution("()))((()") === "()(())()");