import { reduce } from "lodash";
import { read } from "../@util/read";

const r = (x: string | undefined) =>
  (x ?? "")
    .replace(/one/g, "1")
    .replace(/two/g, "2")
    .replace(/three/g, "3")
    .replace(/four/g, "4")
    .replace(/five/g, "5")
    .replace(/six/g, "6")
    .replace(/seven/g, "7")
    .replace(/eight/g, "8")
    .replace(/nine/g, "9");
const m = /\d|one|two|three|four|five|six|seven|eight|nine|/g;
const mr = /\d|enin|thgie|neves|xis|evif|ruof|eerht|owt|eno|/g;

const rev = (x: string) => x.split("").reverse().join("");

const res = reduce(
  read(1).split(/\n/),
  (a, b) =>
    a +
    +(
      r(b.match(m)?.filter(Boolean)[0]) +
      r(rev(b).match(mr)?.filter(Boolean)[0])
    ),

  0
);

console.log(res);
