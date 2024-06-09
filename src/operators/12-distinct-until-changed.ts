import { distinctUntilChanged, from, of } from "rxjs";

const numbers$ = of(1, "1", 3, 1, 1, 2, 3, 4, 2, 1, 2, 2, 2, 2, 2, "1");

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Character {
	name: string;
}

const characters: Character[] = [
	{
		name: "Megaman",
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
		name: "Superman",
	},
	{
		name: "Superman",
	},
	{
		name: "Superman",
	},
];

from(characters)
	.pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
	.subscribe(console.log);
