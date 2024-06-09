import {
	asyncScheduler,
	distinctUntilChanged,
	fromEvent,
	pluck,
	throttleTime,
} from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(throttleTime(1000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");
input$
	.pipe(
		pluck("target", "value"),
		throttleTime(400, asyncScheduler, {
			leading: true,
			trailing: true,
		}),
		distinctUntilChanged()
	)
	.subscribe(console.log);
