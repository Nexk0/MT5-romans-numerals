const ConvertToArabic = (romanNumeral) => {
  const romanNumerals = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentChar = romanNumeral[i];
    const currentValue = romanNumerals[currentChar];
    const nextChar = romanNumeral[i + 1];
    const nextValue = romanNumerals[nextChar];

    if (nextValue && currentValue < nextValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }

  return result;
};

export default ConvertToArabic;
