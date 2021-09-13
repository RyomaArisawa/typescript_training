export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  //初期化処理がわかりにくいため、書き換える
  // constructor(public name: string, public speed: number){
  //   super(name);
  // }

  public speed: number;

  constructor(name: string, speed: number) {
    super(name);

    this.speed = speed;
  }

  run(): string {
    return `${super.run()} ${this.speed}km/h`;
  }
}

let animal = new Animal('Tama');
let lion = new Lion('Shimba', 80);

console.log(animal.run());
console.log(lion.run());
