import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
	next: (value) => console.log("Next [next]:", value),
	error: (error) => console.error("Error [error]:", error),
	complete: () => console.info("Completed [complete]"),
};

const interval$ = new Observable<number>((subs) => {
	const intervalId = setInterval(() => {
		subs.next(Math.random());
	}, 1000);

	return () => {
		clearInterval(intervalId);
		console.log("Interval destroyed");
	};
});

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

// const subs2 = interval$.subscribe((number) => console.log("Sub1:", number));
// const subs1 = interval$.subscribe((number) => console.log("Sub2:", number));

const subs2 = subject$.subscribe(observer);
const subs1 = subject$.subscribe(observer);

setTimeout(() => {
	subject$.next(10);
	subject$.complete();
	subscription.unsubscribe();
}, 3500);
