import { map, range, tap } from "rxjs";

const numbers$ = range(1, 5);

numbers$
	.pipe(
		tap((x) => console.log(`Before: ${x}`)),
		map((x) => x * 10),
		tap({
			next: (x) => console.log(`After: ${x}`),
			complete: () => console.log("Completed"),
		})
	)
	.subscribe((value) => console.log("subs", value));
