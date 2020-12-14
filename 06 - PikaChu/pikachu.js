export const pikachu = function (number) {
  let a = number % 3 === 0;
  let b = number % 5 === 0;

  if (a) {
    if (b) {
      return "PikaChu"
    }

    return "Pika";
  } else {
    if (b) {
      return "Chu"
    }

    return number;
  }
};
