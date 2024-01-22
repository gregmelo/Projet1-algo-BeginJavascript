import { readFileSync, writeFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const displayResult = (day, result) => {
  console.log(`After ${day} days: ${result.join(",")}`);
};

const part1 = (data) => {
  const DAYS = 80; // Changer le nombre de jours selon vos besoins
  const fishs = data.split(",").map(Number);
  for (let day = 0; day < DAYS; day++) {
    const saveLength = fishs.length;
    for (let i = 0; i < saveLength; i++) {
      if (fishs[i] === 0) {
        fishs[i] = 6;
        fishs.push(8);
      } else {
        fishs[i]--;
      }
    }
  }
  return { fishs, length: fishs.length };
};

console.log({ part1: part1(final) });
