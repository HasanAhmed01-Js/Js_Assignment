function calculateFinalScore(obj) {
  let name = obj.name;
  let testScore = obj.testScore;
  let schoolGrade = obj.schoolGrade;
  let parentProfession = obj.isFFamily;
  if (typeof obj === "object") {
    if (
      typeof name === "string" &&
      typeof testScore === "number" &&
      testScore <= 50 &&
      typeof schoolGrade === "number" &&
      schoolGrade <= 30 &&
      typeof parentProfession === "boolean" &&
      parentProfession == true
    ) {
      let total = testScore + schoolGrade + 20;
      if (total >= 80) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return "Invalid Input";
  }
}

let obj = { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true };
const result = calculateFinalScore(obj);
console.log(result);
