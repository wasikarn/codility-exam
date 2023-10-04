function solution(N) {
  // Convert N to a string to work with individual digits
  const strN = N.toString();

  // Find the index of the first '5' digit
  const indexOf5 = strN.indexOf("5");

  // Create a new string without the '5' digit
  let newStr;

  if (indexOf5 >= 0) {
    newStr = strN.slice(0, indexOf5) + strN.slice(indexOf5 + 1);
  } else {
    // If there are no '5' digits, return 0
    newStr = "0";
  }

  // Convert the new string back to an integer and apply the sign
  if (N > 0) {
    return parseInt(newStr, 10);
  }

  const result = parseInt(newStr.split("").sort().join(""), 10);

  return result === 0 ? 0 : result;
}

// Examples:
console.log(solution(15958)); // Output: 1958
console.log(solution(-5859)); // Output: -589
console.log(solution(-5000)); // Output: 0
console.log(solution(25306)); // Output: 2306
console.log(solution(-25306)); // Output: -236
console.log(solution(-995595));
console.log(solution(999995));
