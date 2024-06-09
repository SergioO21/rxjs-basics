import { from, map, reduce, scan } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalAccumulator = (acc, value) => acc + value;

// ------------------------------------
// Reduce
from(numbers).pipe(reduce(totalAccumulator, 0)).subscribe(console.log);

// ------------------------------------
// Scan
from(numbers).pipe(scan(totalAccumulator, 0)).subscribe(console.log);

// ------------------------------------
// Redux
interface UserInfo {
	age?: number;
	auth?: boolean;
	id?: string;
	token?: string;
}

const userInfo: UserInfo[] = [
	{ id: "SOREC", auth: false, token: null },
	{ id: "SOREC", auth: true, token: "SOR" },
	{ id: "SOREC", auth: true, token: "JKO" },
];

const state$ = from(userInfo).pipe(
	scan<UserInfo, UserInfo>((acc, value) => ({ ...acc, ...value }), { age: 20 })
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);
