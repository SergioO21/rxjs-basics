import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
	.pipe(
		map(({ x }) => x),
		tap((value) => console.log("Tap:", value)),
		auditTime(5000)
	)
	.subscribe((value) => console.log("Value:", value));
