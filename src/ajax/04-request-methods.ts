import { ajax } from "rxjs/ajax";

const url: string = "https://httpbin.org/delay/1";

ajax.get(url).subscribe(console.log);

ajax.post(url,
  {
    id: 21,
    name: "Sergio"
    },
  {
    'my-token': 'AFK123',
  }
  ).subscribe(console.log);

ajax({
  url: url,
  method: "DELETE",
  headers: {
    "my-token": "AFK123",
  },
  body: {
    id: 21,
    name: "Sergio"
  }
}).subscribe(console.log);
