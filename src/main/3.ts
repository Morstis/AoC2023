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
