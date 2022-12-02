export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const rock = "A";
const paper = "B";
const scissors = "C";

let score = 0;

for (const line in lines) {
  const round: String[] = lines[line].split(" ");
  const elf = round[0];
  const player = round[1];

  switch (player) {
    case "X":
      switch (elf) {
        case rock:
          score += 3 + 0;
          break;

        case paper:
          score += 1 + 0;

          break;

        case scissors:
          score += 2 + 0;

          break;

        default:
          break;
      }

      break;

    case "Y":
      switch (elf) {
        case rock:
          score += 1 + 3;
          break;

        case paper:
          score += 2 + 3;

          break;

        case scissors:
          score += 3 + 3;

          break;

        default:
          break;
      }
      break;

    case "Z":
      switch (elf) {
        case rock:
          score += 2 + 6;
          break;

        case paper:
          score += 3 + 6;

          break;

        case scissors:
          score += 1 + 6;

          break;

        default:
          break;
      }
      break;

    default:
      break;
  }
}

console.log(score);
