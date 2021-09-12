export {};

const sum: (...values: number[]) => void = (...values: number[]) => {
  console.log(values);
  let total: number = values.reduce((sum: number, element: number): number => {
    return sum + element;
  });
  console.log(total);
}

sum(1,2,3);
