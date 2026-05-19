export function determine(address: string): boolean {
	const isIpv6Address = address.includes(`:`) satisfies boolean;
	return isIpv6Address;
}
