export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n\n");

let highest = 0;
let values: number[] = [];

for (const line in lines) {
  const valueOfCurrentLine = lines[line].split("\n").map((e) => parseInt(e));

  const sum = valueOfCurrentLine.reduce((a, b) => a + b, 0);
  values[line] = sum;

  if (sum > highest) {
    highest = sum;
  }
}

console.log(highest, values);

const sorted = values.sort((a, b) => b - a);
console.log("Top three are");

const top3: number[] = [sorted[0], sorted[1], sorted[2]];
console.log(top3.reduce((a, b) => a + b, 0));
