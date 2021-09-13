export {};

// const echo1 = (arg: number): number => {
//   return arg;
// }

// const echo2 = (arg: string): string => {
//   return arg;
// }

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(53));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<string>('hello').echo());
console.log(new Mirror<number>(55).echo());
