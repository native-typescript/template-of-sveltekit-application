import type {BasePath} from "../BasePath.ts";
import {type} from "arktype";
export const schema = type(`string`)
	.narrow((value): value is `/${string}` | `` => {
		return value === `` || value.startsWith(`/`);
	})
	.pipe(function parse(basePath): BasePath {
		return basePath === `` ? null : basePath;
	});
