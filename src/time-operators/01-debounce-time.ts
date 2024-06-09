import { debounceTime, distinctUntilChanged, fromEvent, pluck } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(debounceTime(1000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");
input$
	.pipe(pluck("target", "value"), debounceTime(1000), distinctUntilChanged())
	.subscribe(console.log);
