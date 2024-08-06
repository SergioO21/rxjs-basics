
import { debounceTime, fromEvent, map, mergeAll, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

import { GitHubResponse, User } from "../interfaces";

// References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);


// Helpers
const displayUsers = (users: User[]) => {
  console.log(users);
  orderList.innerHTML = "";

  for(const user of users) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = user.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = user.html_url;
    anchor.text = "Go page";
    anchor.target = "_blank";

    li.append( img );
    li.append( user.login + " " );
    li.append( anchor );

    orderList.append(li);
  }
}


// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  debounceTime(500),
  map<KeyboardEvent, string>(({ target }) => target["value"]),
  map<string, Observable<GitHubResponse>>((text) => ajax.getJSON(
      `https://api.github.com/search/users?q=${text}`
  )),
  mergeAll<Observable<GitHubResponse>>(),
  map<GitHubResponse, User[]>((res) => res.items),
).subscribe( displayUsers );
