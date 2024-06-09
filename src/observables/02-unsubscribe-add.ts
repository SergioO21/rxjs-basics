import { Observable, Observer } from "rxjs";

const interval$ = new Observable<number>((subs) => {
	let counter = 1;

	const interval = setInterval(() => {
		subs.next(counter);
		console.log(counter);
		counter += 1;
	}, 1000);

	setTimeout(() => {
		subs.complete();
	}, 2500);

	return () => {
		clearInterval(interval);
		console.log("Interval destroyed");
	};
});

const subs1 = interval$.subscribe();
const subs2 = interval$.subscribe();
const subs3 = interval$.subscribe();

subs1.add(subs2);
subs2.add(subs3);

setTimeout(() => {
	subs1.unsubscribe();
	// subs2.unsubscribe();
	// subs3.unsubscribe();

	console.log("Timeout completed");
}, 3000);
