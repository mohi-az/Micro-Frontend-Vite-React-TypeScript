/// <reference types="vite/client" />
declare module 'remoteApp/Products' {
  import type { ComponentType } from 'react';
  export const Products: ComponentType<{ ItemCount?: number; RowCount?: string }>;
}

declare module 'remoteApp/ProductDetail' {
  import type { ComponentType } from 'react';
  export const ProductDetail: ComponentType<{ id: string }>;
}

declare module 'AuthRemote/Login' {
  export function Login(): HTMLElement;
}
