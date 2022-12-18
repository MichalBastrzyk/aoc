export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines: string[] = input.split("\n");

const scores: number[] = [];

for (let i = 0; i < lines.length; i++) {
    const element = lines[i];
    const elementSplit = element.split("");

    for (let j = 0; j < elementSplit.length; j++) {
	const slice = [...elementSplit].slice(j, j + 14);

	const filtered = slice.filter((v, i) => slice.indexOf(v) !== i);
	if (filtered.length === 0) { 
	    
	    scores.push(j + 14);
	    break;
	}
    }
}

console.log(scores);

