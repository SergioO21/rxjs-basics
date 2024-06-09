import { of, take, tap } from "rxjs";

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
	.pipe(
		tap((x) => console.log("Tap:", x)),
		take(3)
	)
	.subscribe({
		next: (value) => console.log("Next:", value),
		complete: () => console.log("Completed"),
	});
