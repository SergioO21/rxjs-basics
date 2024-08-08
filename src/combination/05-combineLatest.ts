
import { combineLatest, fromEvent, map } from "rxjs";

const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "Email";
input1.type = "email";

input2.placeholder = "Password";
input2.type = "password";

document.querySelector("body").append(input1, input2);


// Helper
const getInputStream = (element: HTMLInputElement) =>
  fromEvent<KeyboardEvent>(element, "keyup").pipe(
    map((event) => event.target["value"]),
  );


combineLatest(
  getInputStream(input1),
  getInputStream(input2),
).subscribe( console.log );
