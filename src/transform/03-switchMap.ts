
import { fromEvent, map, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";

// References
const body = document.querySelector('body');
const textInput = document.createElement('input');
body.append(textInput);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');
const url = "https://httpbin.org/delay/1?arg="

input$.pipe(
  map(({target}) => target["value"]),
  switchMap((text) => ajax.getJSON(url + text))
).subscribe( console.log );
