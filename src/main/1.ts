import { reduce } from "lodash";
import { read } from "../@util/read";

const res = reduce(
  read(1).split(/\n/),
  (a, b) =>
    a + +(b.split("").filter((x) => (x.match(/\d/) ?? []).length > 0)[0] +
      b.split("").reverse().filter((x) => (x.match(/\d/) ?? []).length > 0)[0]),
  0
);

console.log(res);
