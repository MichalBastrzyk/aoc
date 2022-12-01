export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n\n");

let highest = 0;

for (const line in lines) {
  const valueOfCurrentLine = lines[line].split("\n").map((e) => parseInt(e));

  const sum = valueOfCurrentLine.reduce((a, b) => a + b, 0);

  if (sum > highest) {
    highest = sum;
  }
}

console.log(highest);
