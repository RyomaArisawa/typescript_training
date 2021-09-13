export{};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry(): string {
    return 'Bow Bow'
  }
}

let lion = new Lion();

console.log(lion.cry());