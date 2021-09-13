export {};

namespace Japanese {
  export class Person {
    constructor(public name: string) {}
  }
}

namespace English {
  export class Person {
    constructor(public name: string) {}
  }
}

const me = new Japanese.Person('はむ');
console.log(me);

const michael = new English.Person('Mecheal');
console.log(michael);
