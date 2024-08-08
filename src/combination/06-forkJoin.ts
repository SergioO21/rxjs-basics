import { delay, forkJoin, interval, of, take } from "rxjs";


const numbers$ = of(1,2,3,4,5);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of("a", "b", "c").pipe(delay(3500));

forkJoin({
  numbers: numbers$,
  interval: interval$,
  letters: letters$,
}).subscribe((res) => {
  console.log(`Numbers: [${res.numbers}]`);
  console.log(`Interval: [${res.interval}]`);
  console.log(`Letters: [${res.letters}]`);
});
