import { lazy, Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarouselSilder } from '../Components/Carousel/Carousel';
import { RemoteErrorBoundary } from '../Components/RemoteErrorBoundary';
import { EventType, type ProductClickDetail } from '../../../Globals';

const Products = lazy(() =>
  import('remoteApp/Products').then(module => {
    // This federation plugin wraps named exports in `default` for dynamic imports.
    return { default: module.Products ?? module.default.Products };
  })
);

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const onProductClick = (event: Event) => {
      const { productId } = (event as CustomEvent<ProductClickDetail>).detail;
      navigate(`/products/${encodeURIComponent(productId)}`);
    };

    document.addEventListener(EventType.PRODUCT_CLICK__VIEW_DETAIL, onProductClick);
    return () => document.removeEventListener(EventType.PRODUCT_CLICK__VIEW_DETAIL, onProductClick);
  }, [navigate]);

  return (
    <main className="flex flex-col w-full bg-white">
      <CarouselSilder />
      <section id="products" aria-label="Products">
        <RemoteErrorBoundary fallback="The products remote is unavailable. Start Products-Remote on port 5001.">
          <Suspense fallback={<p role="status">Loading products…</p>}>
            <Products ItemCount={7} RowCount="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" />
          </Suspense>
        </RemoteErrorBoundary>
      </section>
    </main>
  );
};

export default Home;
