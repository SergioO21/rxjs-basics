import { fromEvent, map, merge } from "rxjs";

const keyUp$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

merge(
  keyUp$.pipe(
    map((val) => val.type)
  ),
  click$.pipe(
    map((val) => val.type)
  ),
).subscribe( console.log );
