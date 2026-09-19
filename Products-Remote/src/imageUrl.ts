// Resolve public assets against the remote module, not the host page's origin.
const imagesBase = new URL('/images/Bikes', import.meta.url).href;

export const productImageUrl = (filename: string) => `${imagesBase}/${encodeURIComponent(filename)}`;
