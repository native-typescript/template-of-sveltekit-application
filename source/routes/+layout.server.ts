declare const __SHOULD_PRERENDER__: boolean;
export const csr = true as const;
export const prerender = __SHOULD_PRERENDER__;
export const ssr = true as const;
export const trailingSlash = `never` as const;
