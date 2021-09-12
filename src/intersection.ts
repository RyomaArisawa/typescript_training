export{};

type Pitcher = {
  speed: number;
}

type Batter = {
  average: number;
}

type TwoWayPlayer = Pitcher & Batter;

const otani: TwoWayPlayer = {
  speed: 154,
  average: 0.367
}