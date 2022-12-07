export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines: string[] = input.split("\n");

let groups: string[][] = [];

//  Organize lines into groups of 3.
for (let i = 0; i <= lines.length; i += 3) {
  if (i !== lines.length) groups.push([lines[i], lines[i + 1], lines[i + 2]]);
}

let score: number = 0;

for (const group in groups) {
  const element = groups[group];

  const group1 = element[0].split("");
  const group2 = element[1].split("");
  const group3 = element[2].split("");

  // Find common element existing in all of three arrays.
  const commonElement = group1.find(
    (number) => group2.includes(number) && group3.includes(number)
  );

  if (commonElement) score += getScore(commonElement);
}

console.log(score);

function getScore(char: string) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet: string[] = alpha.map((x) => String.fromCharCode(x));

  if (char == char.toUpperCase())
    return alphabet.indexOf(char.toUpperCase()) + 1 + 26;
  else if (char == char.toLowerCase())
    return alphabet.indexOf(char.toUpperCase()) + 1;
  else return 0;
}
