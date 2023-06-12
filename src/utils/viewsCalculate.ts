export const viewsCalculate = (num: number) => {
  const stringNumber = String(num);

  const numLength = stringNumber.length;

  if (numLength === 3) {
    return `${stringNumber} views`;
  } else if (numLength === 4) {
    const firstCart = stringNumber.charAt(0);
    const lastCart = stringNumber.substring(1, stringNumber.length);
    const decimalNum = lastCart.charAt(0);
    const newString = `${firstCart} ${decimalNum !== '0' && '.' + decimalNum}`;

    return `${newString}k views`;
  }
};
