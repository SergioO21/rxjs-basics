import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const button = document.createElement("button");
button.innerHTML = "Stop Timer";

document.querySelector("body").append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, "click").pipe(
	tap(() => console.log("Before skip")),
	skip(1),
	tap(() => console.log("After skip"))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
	next: (value) => console.log("Next:", value),
	complete: () => console.log("Completed"),
});
