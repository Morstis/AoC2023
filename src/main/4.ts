import { read } from "../@util/read";

const input = read(4)
  .split("\n")
  .map((x) =>
    x.split(": ").map((x) =>
      x.split(" | ").map((x) =>
        x
          .split(" ")
          .filter((x) => x != "")
          .map((y) => +y)
      )
    )
  );

const v = input.map((x) => x[1]);

const res1 = v.reduce(
  (acc, x) =>
    acc +
    Math.floor(x[1].reduce((a, b) => a * (x[0].includes(b) ? 2 : 1), 0.5)),
  0
);

console.log(res1);

type A = { numbers: number[][]; occ: number };

const a: A[] = input.map((x) => ({ numbers: x[1], occ: 1 }));

a.forEach((x, i) =>
  " "
    .repeat(
      Math.floor(
        x.numbers[1].reduce((a, b) => a + (x.numbers[0].includes(b) ? 1 : 0), 0)
      )
    )
    .split("")
    .map((_, j) => j + 1)
    .forEach((y) => (a[i + y].occ += a[i].occ))
);

console.log(a.map((x) => x.occ).reduce((x, acc) => acc + x, 0));
