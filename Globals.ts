export const EventType = {
  PRODUCT_CLICK__VIEW_DETAIL: 'PRODUCT_CLICK:VIEW_DETAIL',
} as const;

export type ProductClickDetail = { productId: string };
