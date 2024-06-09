import { distinctUntilKeyChanged, from } from "rxjs";

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

from(characters).pipe(distinctUntilKeyChanged("name")).subscribe(console.log);
