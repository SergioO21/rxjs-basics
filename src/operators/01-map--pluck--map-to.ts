import { fromEvent, range, map, pluck, mapTo } from "rxjs";

// range(1, 5)
// 	.pipe(map<number, string>((value: number) => String(value * 10)))
// 	.subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

// Map
const keyUpMap$ = keyUp$.pipe(map((event) => event.code));

// Pluck
const keyUpPluck$ = keyUp$.pipe(pluck("target", "firstChild", "baseURI"));

// MapTo
const keyUpMapTo$ = keyUp$.pipe(mapTo("Key press"));

// Subscribers
keyUp$.subscribe(console.log);
keyUpMap$.subscribe((value) => console.log("map", value));
keyUpPluck$.subscribe((value) => console.log("pluck", value));
keyUpMapTo$.subscribe((value) => console.log("mapTo", value));
