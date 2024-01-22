import { readFileSync, writeFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part2 = (data) => {
  const DAYS = 256;
  const fishsAges = data
    .split(",")
    .map(Number)
    .reduce((acc, curr) => {
      acc[curr] += 1;
      return acc;
    }, Array.from({ length: 9 }).fill(0));

  for (let day = 0; day < DAYS; day++) {
    const day0 = fishsAges.shift();
    fishsAges[6] += day0;
    fishsAges.push(day0);
  }

  return {
    fishsAges,
    l: fishsAges.reduce((acc, curr) => acc + curr),
  };
};

console.log({ part1: part2(final) });
