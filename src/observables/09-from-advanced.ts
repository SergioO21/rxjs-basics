import { of, from } from "rxjs";

/**
 * of = takes arguments and generates a sequence
 * from = array, promise, iterable, observable
 */

const observer = {
	next: (val) => console.log("Next:", val),
	complete: () => console.log("Completed"),
};

// const source$ = from([1, 2, 3, 4, 5]); // 1,2,3,4,5
// const source$ = of([1, 2, 3, 4, 5]); // [1,2,3,4,5]
const source$ = from(fetch("https://api.github.com/users/sergioo21"));

source$.subscribe(async (resp) => {
	console.log(resp);

	const data = await resp.json();
	console.log(data);
});

const myGenerator = function* () {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
};

const myIterable = myGenerator();

from(myIterable).subscribe(observer);
