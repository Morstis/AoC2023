import { read } from "../@util/read";

const m = [...read(3).matchAll(/\d+/g)];

const match = /(?!(\d|\.|\n))./gm;

const xs = read(3)
  .split("\n")
  .map((x) => x.split(""));

const res = m.filter((x) => {
  const v = x[0];
  const row = Math.floor(x.index! / (xs[0].length + 1));
  const col = x.index! % (xs[0].length + 1);
  const n: string[] = [
    xs[row][col - 1] ?? ".",
    xs[row][col + v.length] ?? ".",
    ...((xs[row + 1] ?? []).slice(
      Math.max(col - 1, 0),
      Math.max(col + v.length + 1, v.length)
    ) ?? []),
    ...((xs[row - 1] ?? []).slice(
      Math.max(col - 1, 0),
      Math.max(col + 1 + v.length, v.length)
    ) ?? []),
  ];

  return n.some((x) => (x.match(match) ?? []).length > 0);
});

console.log(res.map((x) => x[0]).reduce((acc, x) => acc + +x, 0));

const star: { [key: string]: number[] } = {};

m.forEach((x) => {
  const v = x[0];
  const row = Math.floor(x.index! / (xs[0].length + 1));
  const col = x.index! % (xs[0].length + 1);

  for (
    let x = Math.max(row - 1, 0);
    x <= Math.min(row + 1, xs.length - 1);
    x++
  ) {
    for (
      let y = Math.max(col - 1, 0);
      y <= Math.min(col + v.length, xs[0].length);
      y++
    ) {
      const val = xs[x][y];
      if (val == "*") {
        star[[x, y].join()] = [...(star[[x, y].join()] ?? []), +v];
      }
    }
  }
});
console.log(
  Object.values(star)
    .filter((x) => x.length == 2)
    .map((x) => x[0] * x[1])
    .reduce((acc, x) => acc + x, 0)
);
