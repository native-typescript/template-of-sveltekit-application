import {regex, type} from "arktype";
export const schema = type(regex(`^/`, `u`)).or(
	type(`''`).pipe(function makeNull(): null {
		return null;
	}),
);
