import { distinct, from, of } from "rxjs";

const numbers$ = of(1, "1", 3, 1, 1, 2, 3, 4, 2, 1, 2, 4, 2, 3, 5, "1");

numbers$.pipe(distinct()).subscribe(console.log);

interface Character {
	name: string;
}

const characters: Character[] = [
	{
		name: "Megaman",
	},
	{
		name: "X",
	},
	{
		name: "Megaman",
	},
	{
		name: "X",
	},
	{
		name: "Megaman",
	},
	{
		name: "Superman",
	},
	{
		name: "Batman",
	},
	{
		name: "Megaman",
	},
	{
		name: "Superman",
	},
	{
		name: "Megaman",
	},
];

from(characters)
	.pipe(distinct((character) => character.name))
	.subscribe(console.log);
