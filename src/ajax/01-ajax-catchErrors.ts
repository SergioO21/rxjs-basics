import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, of } from "rxjs";

const url: string = "https://api.github.com/users?per_page=5";

// ==========================================
// Promises
// ==========================================
// const fetchPromise = fetch(url);

// const handleError = ( response: Response ) => {
//   if ( !response.ok ) throw new Error( response.statusText );
//   return response;
// }

// fetchPromise
//   .then( handleError )
//   .then( response => response.json() )
//   .then( console.log )
//   .catch( error => console.error(error) );


// ==========================================
// Observables
// ==========================================
const handleAjaxError = ( error: AjaxError ) => {
  console.warn("Error:", error.message);
  return of([]);
}

ajax(url)
  .pipe(
    map( (res) => res.response),
    catchError( handleAjaxError )
  )
  .subscribe( users => console.log("Users:", users) );
