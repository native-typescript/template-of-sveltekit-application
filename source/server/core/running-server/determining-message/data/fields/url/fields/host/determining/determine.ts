export function determine(address: string): string {
	switch (address) {
		case `0.0.0.0`:
		case `::`: {
			return `localhost`;
		}
		default: {
			const isIpv6Address: boolean = address.includes(`:`);
			if (isIpv6Address) {
				return `[${address}]`;
			} else {
				return address;
			}
		}
	}
}
