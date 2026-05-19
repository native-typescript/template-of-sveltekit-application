export function determine(address: string): boolean {
	const isInLoopbackRange = address.startsWith(`127.`) satisfies boolean;
	return isInLoopbackRange;
}
