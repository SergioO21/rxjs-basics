import { first, fromEvent, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
	.pipe(
		tap(({ clientY }) => console.log(clientY)),
		first<PointerEvent>(({ clientY }) => clientY >= 400)
	)
	.subscribe({
		next: (value) => console.log("Next:", value),
		complete: () => console.log("Completed"),
	});
