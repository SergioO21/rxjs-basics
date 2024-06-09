import { Observable, Observer } from "rxjs";

// const obs$ = Observable.create();

const observer: Observer<any> = {
	next: (value) => console.log("Next [next]:", value),
	error: (error) => console.error("Error [error]:", error),
	complete: () => console.info("Completed [complete]"),
};

const obs$ = new Observable<string>((subs) => {
	subs.next("H1");
	subs.next("H2");
	subs.next("H3");
	subs.next("H4");
	subs.complete();
	subs.next("H5");
});

// obs$.subscribe(console.log);

// obs$.subscribe(
// 	(value) => console.log("Next:", value),
// 	(error) => console.error("Error:", error),
// 	() => console.info("Completed")
// );

obs$.subscribe(observer);
