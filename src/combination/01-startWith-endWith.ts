import { endWith, of, startWith } from "rxjs";

const numbers$ = of(1,2,3).pipe(
  startWith("First", 123, "Value"),
  endWith("Last", 321, "Value"),
);

numbers$.subscribe( console.log );
