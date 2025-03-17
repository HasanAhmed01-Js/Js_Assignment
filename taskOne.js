function calculateTax(income, expenses) {
  if (income >= 0 && expenses >= 0 && income >= expenses) {
    let taxReturnAmount = (income - expenses) * 0.2;
    return taxReturnAmount;
  } else {
    return "Invalid Input";
  }
}

const result = calculateTax(6000, 1500);
console.log(result);
