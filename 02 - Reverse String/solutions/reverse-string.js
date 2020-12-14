export function reverseString(string) {
  let reversedString = "";

  for (let i = string.length; i > 0; i--)
    reversedString += string[i - 1];

  return reversedString
}
