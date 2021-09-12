export{};

type profile = {
  name: string;
  age: number;
}
const example1: profile = {
  name: 'Ham',
  age: 43
}

type profile2 = typeof example1;

const example2: profile2 = {
  name: 'Ham',
  age: 43
}


interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'ham',
  age: 43
}