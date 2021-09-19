export {};

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

type PartialProfile = Partial<Profile>;

// keyofは指定した型（Profile）のキーを文字列リテラル型のユニオン型として受け取る（name | age | zipCode）
type PropertyTypes = keyof Profile;

let a: PropertyTypes = 'name';
a = 'age';
a = 'zipCode';

type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};

type OptionalProfile = Optional<Profile>;
