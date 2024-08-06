import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";


const letters$ = of("a", "b", "c");

letters$
  .pipe(
    mergeMap( (letter) => interval(1000).pipe(
      map( i => letter + i),
      take(3),
    ))
  )
  // .subscribe({
  //   next: val => console.log("Next:", val),
  //   complete: () => console.log("Complete"),
  // });


const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
      takeUntil( mouseUp$ )
    ))
  )
  .subscribe(console.log);
