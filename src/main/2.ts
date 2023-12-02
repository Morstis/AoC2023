import { read } from "../@util/read";

type Draw = {
  blue?: number;
  red?: number;
  green?: number;
};
type Game = Draw[];

const input = read(2)
  .split("\n")
  .map((line, i) => {
    const game: Game = line
      .split(":")[1]
      .split(";")
      .map(
        (draw) =>
          Object.assign(
            {},
            ...draw.split(",").map((e) => ({
              [e.trim().split(" ")[1]]: e.trim().split(" ")[0],
            }))
          ) as Draw
      );
    return { game, i: i + 1 };
  });

const res1 = input.filter(
  ({ game }) =>
    !game.some(
      ({ red, green, blue }) =>
        (red && red > 12) || (green && green > 13) || (blue && blue > 14)
    )
);

const res2 = input.reduce((acc, { game }) => {
  const b = game.map((y) => +(y.blue ?? 0));
  const r = game.map((y) => +(y.red ?? 0));
  const g = game.map((y) => +(y.green ?? 0));
  return acc + Math.max(...r) * Math.max(...b) * Math.max(...g);
}, 0);

console.log(res1.reduce((acc, x) => acc + x.i, 0));
console.log(res2);
