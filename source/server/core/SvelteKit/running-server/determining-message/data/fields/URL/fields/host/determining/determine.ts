import {isInLoopbackRange_} from "../is-in-loopback-range/module.ts";
import {isIpv6Address_} from "../is-ipv6-address/module.ts";
export function determine(address: string): string {
	switch (address) {
		case `0.0.0.0`:
		case `::1`:
		case `::`: {
			return `localhost`;
		}
		default: {
			const isInLoopbackRange = isInLoopbackRange_.determining.determine(
				address,
			) satisfies boolean;
			if (isInLoopbackRange) {
				return `localhost`;
			} else {
				const isIpv6Address = isIpv6Address_.determining.determine(
					address,
				) satisfies boolean;
				if (isIpv6Address) {
					return `[${address}]`;
				} else {
					return address;
				}
			}
		}
	}
}
