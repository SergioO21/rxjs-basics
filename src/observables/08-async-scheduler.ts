import { asyncScheduler } from "rxjs";

const greet = () => console.log("Hello");
const greet2 = (name) => console.log(`Hello ${name}`);

// asyncScheduler.schedule(greet, 2000);
// asyncScheduler.schedule(greet2, 2000, "Perrito");

// ------------------------------------------
// Cannot use arrow functions
const subs = asyncScheduler.schedule(
	function (state) {
		if (state === 10) this.unsubscribe();

		console.log("state", state);

		this.schedule(state + 1, 1000);
	},
	3000,
	0
);

// setTimeout(() => {
// 	subs.unsubscribe();
// }, 6000);

// asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
