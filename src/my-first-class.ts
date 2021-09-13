export{};

class Person{
  name: string;
  age: number;
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('Taro', 30);

console.log(taro);

console.log(taro.profile());

class Person2 {
  constructor(public name: string, public age: number){};
}

let taro2 = new Person2('Ham', 43);

console.log(taro2);