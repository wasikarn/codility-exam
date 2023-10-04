function solution(N) {
  let maxGap = 0;
  let currentGap = 0;
  let counting = true;

  const binaryN = N.toString(2);

  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] !== "1" && counting) {
      currentGap++;

      continue;
    }

    if (counting) {
      maxGap = Math.max(maxGap, currentGap);
    } else {
      counting = true;
    }

    currentGap = 0;
  }

  return maxGap;
}

const N = 1041;
const result = solution(N);
console.log(result);
