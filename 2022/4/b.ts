export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines: string[] = input.split("\n");

let score: number = 0;

for (const line in lines) {
  const element = lines[line];

  const pairs: string[] = element.split(",");
  const firstRange: number[] = pairs[0].split("-").map((e) => parseInt(e));
  const secondRange: number[] = pairs[1].split("-").map((e) => parseInt(e));

  let firstNumbers: number[] = [];
  let secondNumbers: number[] = [];

  for (let i = firstRange[0]; i <= firstRange[1]; i++) firstNumbers.push(i);
  for (let i = secondRange[0]; i <= secondRange[1]; i++) secondNumbers.push(i);

  const contains = firstNumbers.filter((value) =>
    secondNumbers.includes(value)
  );

  if (contains.length !== 0) score += 1;
}

console.log(score);
