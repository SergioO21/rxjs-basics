import { interval, reduce, take, tap } from "rxjs";

const totalReducer = (acc: number, value: number) => acc + value;

interval(500)
	.pipe(take(6), tap(console.log), reduce(totalReducer))
	.subscribe({
		next: (value) => console.log("Next", value),
		complete: () => console.log("Complete"),
	});
