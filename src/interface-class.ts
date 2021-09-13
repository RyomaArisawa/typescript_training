export {};

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kogeki');
  }
}

let jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
