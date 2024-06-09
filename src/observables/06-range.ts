import { asyncScheduler, Observable, of, range, scheduled } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5);
// const src$: Observable<number> = range(3, 5); // 3,4,5,6,7
// const src$: Observable<number> = range(1, 5); // 1,2,3,4,5
// const src$: Observable<number> = range(5); // 0,1,2,3,4

const src$: Observable<number> = scheduled(range(1, 5), asyncScheduler);

console.log("Start");
src$.subscribe(console.log);
console.log("End");
