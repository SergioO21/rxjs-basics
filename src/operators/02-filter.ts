import { filter, from, fromEvent, map, range } from "rxjs";

// range(1, 10)
// 	.pipe(filter((value) => value % 2 === 0))
// 	.subscribe(console.log);

range(1, 10).pipe(
	filter((value, i) => {
		console.log("index", i);
		return value % 2 === 0;
	})
);
// .subscribe(console.log);

interface Character {
	type: string;
	name: string;
}

const characters: Character[] = [
	{
		type: "Hero",
		name: "Batman",
	},
	{
		type: "Hero",
		name: "Robin",
	},
	{
		type: "Villain",
		name: "Joker",
	},
];

// Filter
from(characters)
	.pipe(filter((character) => character.type === "Hero"))
	.subscribe(console.log);

// -------------------------------------
// Operator chaining
fromEvent<KeyboardEvent>(document, "keyup")
	.pipe(
		map((event) => event.code),
		filter((code) => code === "Enter")
	)
	.subscribe(console.log);
