
import { catchError, exhaustMap, fromEvent, map, of, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


// Helpers
interface UserPass {
  email: string;
  password: string;
}

const loginRequest = (userPass: UserPass) => ajax.post(
  "https://reqres.in/api/login?delay=1",
  userPass
).pipe(
  map((res) => res.response["token"]),
  catchError(err => of("Not valid"))
);


// Form
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");


// Configs
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Submit";

form.append(inputEmail, inputPass, submitBtn);
document.querySelector("body").append(form);


// Streams
const submitForm$ = fromEvent(form, "submit")
  .pipe(
    tap((event) => event.preventDefault()),
    map((event) => ({
      email: event.target[0].value,
      password: event.target[1].value,
    })),
    exhaustMap( loginRequest ),
  );


submitForm$.subscribe((token) => {
  console.log(token);
});
