import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { IoSadOutline } from 'react-icons/io5';
import ProductModal from '@/components/product/product-modal';
import productStore from '@/store/product';
import Pagination from '@/components/pagination';
import { getProducts } from '@/services/product';
import usePageCount from '@/hooks/use-page-count';
import ProductSkeleton from '@/components/product/product-skeleton';
import ProductCard from '@/components/product/product-card';
import ProductSelectCard from '@/components/product/product-select-card';
import useViewport from '@/hooks/use-viewport';
import { getProductWrapperStyle } from '@/utils';
import type { ApiProductResponse, Product as IProduct } from '@/types';
import useLockOverflow from '@/hooks/use-lock-overflow';

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const page = url.searchParams.get('page') ?? 0;
  const data = await getProducts({
    page: +page,
  });
  return { data };
}

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useLoaderData() as { data: ApiProductResponse };
  const pageCount = usePageCount({
    total: data?.total,
  });
  const { selectedSize } = productStore();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const viewport = useViewport();

  useLockOverflow(showModal);

  const closeModal = () => {
    setShowModal(false);
    setProduct(null);
  };

  useEffect(() => {
    if (currentPage === 1) {
      navigate('/product');
    }
  }, [currentPage]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    setCurrentPage(newPage);
    navigate({
      search: `page=${newPage}`,
    });
  };

  return (
    <div className={showModal ? `overflow-hidden` : 'overflow-auto'}>
      <header className="flex items-center justify-end mx-42 lg:my-8">
        <ProductSelectCard />
      </header>
      <div className="flex justify-center">
        <div className="w-full lg:w-auto">
          {navigation.state === 'loading' ? (
            <ProductSkeleton />
          ) : data?.products.length ? (
            <>
              <ul
                className="grid grid-cols-1 place-items-center gap-8 lg:(grid-cols-4 gap-8)"
                style={getProductWrapperStyle(viewport, selectedSize)}
              >
                {data?.products.map((product, index) => (
                  <ProductCard
                    product={product}
                    key={index}
                    onClick={() => {
                      setProduct(product);
                      setShowModal(true);
                    }}
                  />
                ))}
              </ul>
              <div className="py-8 mt-8 flex justify-center">
                <Pagination
                  pageCount={pageCount}
                  page={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          ) : (
            <p className="flex items-center gap-2">
              Sorry! There is not products to show. <IoSadOutline size="2em" />
            </p>
          )}
        </div>
      </div>
      {product && (
        <ProductModal
          product={product}
          active={showModal}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Product;