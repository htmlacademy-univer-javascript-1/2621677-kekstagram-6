const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const cleanString = string.replace(/\s/g, '').toLowerCase();
  let reversedString = '';

  for (let i = cleanString.length - 1; i >= 0; i--) {
    reversedString += cleanString[i];
  }

  return cleanString === reversedString;
};

const extractNumbers = (input) => {
  const text = input.toString();
  let numbers = '';

  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    if (character >= '0' && character <= '9') {
      numbers += character;
    }
  }

  if (numbers === '') {
    return NaN;
  } else {
    return parseInt(numbers, 10);
  }
};

export { checkStringLength, isPalindrome, extractNumbers };
