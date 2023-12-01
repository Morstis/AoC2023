import { readFileSync } from "fs";

export const read = (day: number) =>
  readFileSync(`input/${day}.txt`).toString();
