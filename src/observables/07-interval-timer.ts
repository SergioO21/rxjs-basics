import { interval, timer } from "rxjs";

const observer = {
	next: (val) => console.log("next:", val),
	complete: () => console.log("Completed"),
};

const executeIn5 = new Date();
executeIn5.setSeconds(executeIn5.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(executeIn5);

console.log("Start");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("End");
