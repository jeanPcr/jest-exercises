export function hamming(sequence1, sequence2) {
  if (sequence1.length !== sequence2.length) {
    throw new Error("Sequence should be same size");
  }

  let distance = 0;

  for (let i = 0; i < sequence1.length; i++) {
    if (isValidLetter(sequence1[i]) && isValidLetter(sequence2[i])) {
      if (sequence1[i] !== sequence2[i]) {
        distance = distance + 1;
      }
    } else {
      throw new Error("Letters should be A, T, C or G");
    }
  }

  return distance;
}

function isValidLetter(letter) {
  return letter === "A" || letter === "T" || letter === "C" || letter === "G"
}
