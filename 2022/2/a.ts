export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log(lines);

const rock = "A";
const paper = "B";
const scissors = "C";

const rock2 = "X";
const paper2 = "Y";
const scissors2 = "Z";

let score = 0;

for (const line in lines) {
  const round: String[] = lines[line].split(" ");
  const elf = round[0];
  const player = round[1];
  console.log(round);
  if (elf === rock) {
    if (player === rock2) score += 1 + 3;
    if (player === paper2) score += 2 + 6;
    if (player === scissors2) score += 3 + 0;
  } else if (elf === paper) {
    if (player === rock2) score += 1 + 0;
    if (player === paper2) score += 2 + 3;
    if (player === scissors2) score += 3 + 6;
  } else if (elf === scissors) {
    if (player === rock2) score += 1 + 6;
    if (player === paper2) score += 2 + 0;
    if (player === scissors2) score += 3 + 3;
  }
}

console.log(score);
