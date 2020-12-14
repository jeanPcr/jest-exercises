export const isLeap = (year) => {
  if (isDivisibleByZero(year))
  {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }

    return true;
  }
  else
    return false;
};

const isDivisibleByZero = function(number) {
  return number % 4 === 0
};





















