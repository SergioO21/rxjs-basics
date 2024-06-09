import { Observable, of } from "rxjs";

// const obs$: Observable<number> = of(1, 2, 3, 4, 5);

// const obs$: Observable<any> = of(
// 	[1, 2, 3],
// 	{ a: 1, b: 2 },
// 	function () {},
// 	true,
// 	Promise.resolve(true)
// );

const obs$: Observable<number> = of(...[1, 2, 3, 4, 5], 6, 7, 8);

console.log("Obs$ start");

obs$.subscribe({
	next: (next) => console.log("Next:", next),
	complete: () => console.log("Done"),
});

console.log("Obs$ end");
