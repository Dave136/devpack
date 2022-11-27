import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from '../modal';
import type { Product } from '@/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  product: Product;
  active: boolean;
  onClose: () => void;
};

const ProductModal = ({ product, active, onClose }: Props) => {
  return (
    <Modal active={active} onClose={onClose} size="large">
      <div className="flex gap-8">
        <div className="w-md h-96">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt=""
                  className="w-full h-92 object-contain rounded-lg shadow-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full">
          <h3 className="text-2xl">{product.title}</h3>
          <p className="text-sm text-gray-600 my-4 dark:text-gray-500">
            Category: <span className="font-bold ml-1">{product.category}</span>
          </p>
          <hr className="w-full dark:(border-gray-700)" />
          <div className="my-4">
            <h5 className="text-lg">Description</h5>
            <p className="mt-2 text-gray-600 text-sm dark:text-gray-500">
              {product.description}
            </p>
          </div>
          <hr className="my-4 dark:(border-gray-700)" />
          <div>
            <p className="pt-2 text-sm">
              Brand:{' '}
              <span className="text-gray-600 dark:text-gray-500">
                {product.brand}
              </span>
            </p>
            <p className="pt-2 text-sm">
              Stock:{' '}
              <span className="text-gray-600 dark:text-gray-500">
                {product.stock}
              </span>
            </p>
            <p className="text-3xl font-bold mt-8 dark:text-gray-300">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
