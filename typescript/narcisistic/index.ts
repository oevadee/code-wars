export const narcissisticTest = (value: number): boolean => {
  const length = value.toString().length;
  const valueConvertedToNarcisistic = value
    .toString()
    .split("")
    .map((num) => Math.pow(+num, length))
    .reduce((acc, curr) => acc + curr);
  if (+valueConvertedToNarcisistic === value) return true;
  else return false;
};

export const narcissistic = (value: number): boolean =>
  +value
    .toString()
    .split("")
    .map((num) => Math.pow(+num, value.toString().length))
    .reduce((acc, curr) => acc + curr) === value
    ? true
    : false;
