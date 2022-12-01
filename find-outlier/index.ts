export const findOutlierTest = (arr: number[]): number => {
  const newArr = arr.map((num) => num % 2 === 0);
  const countTrues = newArr.filter((el) => el);
  const countFalslys = newArr.filter((el) => !el);
  if (countTrues.length > countFalslys.length) {
    const index = newArr.findIndex((el) => !el);
    return arr[index];
  } else {
    const index = newArr.findIndex((el) => el);
    return arr[index];
  }
};

export const findOutlier = (arr: number[]): number =>
  arr.map((num) => num % 2 === 0).filter((el) => el).length >
  arr.map((num) => num % 2 === 0).filter((el) => !el).length
    ? arr[arr.map((num) => num % 2 === 0).findIndex((el) => !el)]
    : arr[arr.map((num) => num % 2 === 0).findIndex((el) => el)];
