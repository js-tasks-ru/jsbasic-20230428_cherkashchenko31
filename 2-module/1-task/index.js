let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}
function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let key in salaries)
  { 
    if (typeof salaries[key] === "number" && !isNaN(salaries[key]) && isFinite(salaries[key])) {
   sum = sum + salaries[key];   
}
  }
  return sum;
}


