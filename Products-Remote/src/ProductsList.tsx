import { Product } from "./components/Product";
import { catalog } from './data/catalog';
import './product.css';
import { EventType, type ProductClickDetail } from '../../Globals';
export const Products = ({ ItemCount = 6, RowCount = 'grid-cols-2' }: { ItemCount?: number, RowCount?: string }) => {
    const onProductClick = (productId: string) => {
        const detail: ProductClickDetail = { productId };
        document.dispatchEvent(new CustomEvent(EventType.PRODUCT_CLICK__VIEW_DETAIL, { detail }));
    };
    return (
        <div className={`grid gap-3 w-full ${RowCount}`}>
            {catalog.slice(0, ItemCount).map(productItem =>
                <Product key={productItem.id} {...productItem} onClickfn={onProductClick} />
            )}
        </div>
    )
}

