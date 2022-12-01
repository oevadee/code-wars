export const narcissistic = (value: number): boolean => {
  const length = value.toString().length;
  const valueConvertedToNarcisistic = value
    .toString()
    .split("")
    .map((num) => Math.pow(+num, length))
    .reduce((acc, curr) => acc + curr);
  if (+valueConvertedToNarcisistic === value) return true;
  else return false;
};

console.log(narcissistic(153));
