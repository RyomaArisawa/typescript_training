export {};

interface Profile {
  underTwenty: boolean;
  name: string;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  underTwenty: true,
  name: 'Ham'
};

profile.age = 43;
profile.nationality = 'Japan';
