export function determineHostPartOfUrl(dataOfAddress: string): string {
	if (dataOfAddress === `0.0.0.0` || dataOfAddress === `::`) {
		return `localhost`;
	} else {
		const isIpv6Address: boolean = dataOfAddress.includes(`:`);
		if (isIpv6Address) {
			return `[${dataOfAddress}]`;
		} else {
			return dataOfAddress;
		}
	}
}
