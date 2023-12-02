import { reduce } from "lodash";
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
      .map((draw) => {
        const elem = draw.split(",");
        return Object.assign(
          {},
          ...elem.map((e) => ({
            [e.trim().split(" ")[1]]: e.trim().split(" ")[0],
          }))
        ) as Draw;
      });
    return { game, i: i + 1 };
  });

const res = input.filter(
  (x) =>
    !x.game.some((draw) => {
      console.log(draw);

      if (draw.red && draw.red > 12) return true;
      if (draw.green && draw.green > 13) return true;
      if (draw.blue && draw.blue > 14) return true;
      return false;
    })
);

console.log(JSON.stringify(res, undefined, 2));
console.log(res.reduce((acc, x) => acc + x.i, 0));
