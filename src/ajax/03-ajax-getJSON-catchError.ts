import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url: string = "https://httpbin.oxxrg/delay/1";

const handleError = (error: AjaxError) => {
  console.warn("Error", error.message);
  return of({
    ok: false,
    users: false
  })
}

const obs$ = ajax.getJSON( url ).pipe(
  catchError(handleError)
);
const obs2$ = ajax( url ).pipe(
  catchError(handleError)
);
const obs3$ = ajax(url)
  .pipe(
    catchError(handleError)
  )
  .subscribe({
    next: (value) => console.log("Next:", value),
    error: (err) => console.warn(err),
    complete: () => console.log("Completed"),
  });

obs$.subscribe((data) => console.log("getJSON", data));
obs2$.subscribe((data) => console.log("Ajax", data));
