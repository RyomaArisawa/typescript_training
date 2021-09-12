export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};

console.log(bmi(165, 75));

let bmi2: (height: number, weight: number, printable?: boolean) => void = (
  height: number,
  weight: number,
  printable?: boolean
): void => {
  if(printable){
    console.log(weight / (height * height));
  }
};

bmi2(165, 75, false);
