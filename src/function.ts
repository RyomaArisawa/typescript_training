export {};

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(165, 75));

let bmi2: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi2(165, 75));
