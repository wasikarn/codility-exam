function solution(S, T) {
  // Helper function to count distinct digits in a string

  // Convert S and T to Date objects
  const startDate = new Date(`1970-01-01T${S}`);
  const endDate = new Date(`1970-01-01T${T}`);

  let interestingCount = 0;

  // Iterate through times between S and T
  while (startDate.toTimeString() <= endDate.toTimeString()) {
    const timeStr = startDate.toTimeString().slice(0, 8); // Extract "HH:MM:SS" part
    if (countDistinctDigits(timeStr) <= 2) {
      interestingCount++;
    }

    // Increment the time by one second
    startDate.setSeconds(startDate.getSeconds() + 1);
  }

  return interestingCount;
}

function countDistinctDigits(str) {
  const digitSet = new Set();
  for (const char of str) {
    if (char !== ":") {
      digitSet.add(char);
    }
  }
  return digitSet.size;
}

// Example usage:
const S = "15:15:00";
const T = "15:15:12";
console.log(solution(S, T)); // Output: 1

const S2 = "22:22:21";
const T2 = "22:22:23";
console.log(solution(S2, T2)); // Output: 3
