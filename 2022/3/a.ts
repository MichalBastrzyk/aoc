export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines: string[] = input.split("\n");

let score: number = 0;

for (const line in lines) {
  const cur = lines[line];

  const firstCompartment = cur.substring(0, cur.length / 2);
  const secondCompartment = cur.substring(cur.length / 2, cur.length);

  const upperFirst: string[] = [];
  const lowerFirst: string[] = [];

  firstCompartment.split("").map((e) => {
    if (e == e.toUpperCase()) upperFirst.push(e);
    else if (e == e.toLowerCase()) lowerFirst.push(e);
  });

  const upperSecond: string[] = [];
  const lowerSecond: string[] = [];

  secondCompartment.split("").map((e) => {
    if (e == e.toUpperCase()) upperSecond.push(e);
    else if (e == e.toLowerCase()) lowerSecond.push(e);
  });

  let sortedFirst = lowerFirst.sort().concat(upperFirst.sort());
  let sortedSecond = lowerSecond.sort().concat(upperSecond.sort());

  let str = "";

  for (const character in sortedFirst) {
    const cur = sortedFirst[character];

    if (sortedSecond.includes(cur) && !str.split("").includes(cur)) {
      str += cur;
      score += getScore(cur);
    }
  }
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
