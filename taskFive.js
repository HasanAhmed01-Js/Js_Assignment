function waitingTime(waitingTimes, serialNumber) {
  let totalTime = 0;
  if (
    serialNumber > waitingTimes.length &&
    Array.isArray(waitingTimes) === true &&
    typeof serialNumber === "number"
  ) {
    for (let item of waitingTimes) {
      totalTime = item + totalTime;
    }
  } else {
    return "Invalid Input";
  }
  let avgTime = Math.round(totalTime / waitingTimes.length);
  let countTime = serialNumber - 1 - waitingTimes.length;
  const result = avgTime * countTime;
  return result;
}

const candidatesTime = [3, 5, 7, 11, 6];
const serialNumber = 10;
const result = waitingTime(candidatesTime, serialNumber);
console.log(result);
