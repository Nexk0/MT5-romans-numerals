const ConvertToRoman = (arabicNumber) => {
  let arabic = parseInt(arabicNumber);

  if (isNaN(arabic) || arabic < 1 || arabic > 3999) {
    return "Veuillez entrer un nombre valide (1-3999).";
  }

  const romanNumerals = {
    M: 1000, CM: 900,
    D: 500,  CD: 400,
    C: 100,  XC: 90,
    L: 50,   XL: 40,
    X: 10,   IX: 9,
    V: 5,    IV: 4,
    I: 1
  };

  let result = "";

  for (const key in romanNumerals) {
    const value = romanNumerals[key];
    const count = Math.floor(arabic / value);
    arabic -= count * value;
    result += key.repeat(count);
  }

  return result;
};

export default ConvertToRoman;
