export{};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(): string{
    return this._owner;
  }

  set secretNumber(secretNumber: number){
    this._secretNumber = secretNumber;
  }
}

let card = new MyNumberCard('HAM', 43);

console.log(card.owner);

card.secretNumber = 23;

console.log(card);