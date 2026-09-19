
import clsx from 'clsx';
import type { Product as ProductData } from '../ProductsList.type';
import { productImageUrl } from '../imageUrl';

export const Product = (product: ProductData & {onClickfn: (productId: string) => void }) => {

    return (
        
            <div className="flex flex-col h-full">
                <button type="button" className="self-center w-4/5" onClick={() => product.onClickfn(String(product.id))} aria-label={`View ${product.Name}`}>
                    <img src={productImageUrl(product.image)} alt={product.Name} loading="lazy" />
                </button>
                <div className="flex flex-col pl-2 pr-2 pt-1 h-full">
                <div  className=" text-left text-zinc-800 font-bold uppercase">{product.BrandName}</div>
                    <div  className=" text-center text-zinc-500 ">{product.Name}</div>
                    <div className={clsx('text-l text-center text-zinc-700', {'line-through': product.discount})}>{product.Price}$</div>

                    {
                        product.discount ?  <div className="text-l text-center text-rose-600">{product.Price -((product.Price * product.discount) / 100)}$</div>
                         : ''
                    }
                    <div className="self-center h-full content-end"><button type="button" disabled title="Cart is outside this architecture demo" className="uppercase bg-gray-200 pl-3 pr-3 pt-1 pb-1">Cart demo only</button></div>
                </div>
            </div>
        
    )
}
