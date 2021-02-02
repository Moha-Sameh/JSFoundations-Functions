function greet(Receivename) {
  console.log(`Hello ${Receivename}`);
}
function isOdd(n) {
  if (n % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
function oddsSmallerThan(n) {
  if (n % 2 === 1) {
    return (n - 1) / 2;
  } else {
    return n / 2;
  }
}
function squareOrDouble(n) {
  if (n % 2 === 1) {
    return Math.pow(n, 2);
  } else {
    return n * 2;
  }
}
module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
