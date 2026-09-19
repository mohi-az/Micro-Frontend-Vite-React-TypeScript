import { lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RemoteErrorBoundary } from '../Components/RemoteErrorBoundary';

const RemoteProductDetail = lazy(() =>
  import('remoteApp/ProductDetail').then(module => {
    return { default: module.ProductDetail ?? module.default.ProductDetail };
  })
);

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <p>Product ID is missing. <Link to="/">Back to products</Link></p>;

  return (
    <main className="w-full flex justify-center">
      <div className="w-full px-4 lg:w-3/4 pt-5">
        <RemoteErrorBoundary fallback="The products remote is unavailable. Start Products-Remote on port 5001.">
          <Suspense fallback={<p role="status">Loading product…</p>}>
            <RemoteProductDetail id={id} />
          </Suspense>
        </RemoteErrorBoundary>
      </div>
    </main>
  );
};
