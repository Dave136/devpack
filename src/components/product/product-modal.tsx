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
      <div className="flex flex-col gap-4 lg:(flex-row gap-8)">
        <div className="w-full mt-4 lg:(w-md mt-0 h-96)">
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
                  className="w-full object-contain rounded-lg shadow-2xl lg:h-92"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full">
          <h3 className="text-3xl lg:text-2xl">{product.title}</h3>
          <p className="text-md text-gray-600 my-4 dark:text-gray-500 lg:text-sm">
            Category: <span className="font-bold ml-1">{product.category}</span>
          </p>
          <hr className="w-full dark:(border-gray-700)" />
          <div className="my-4">
            <h5 className="text-xl lg:text-lg">Description</h5>
            <p className="mt-2 text-gray-600 text-md dark:text-gray-500 lg:text-sm">
              {product.description}
            </p>
          </div>
          <hr className="my-4 dark:(border-gray-700)" />
          <div>
            <p className="text-md pt-2 lg:text-sm">
              Brand:{' '}
              <span className="text-gray-600 dark:text-gray-500">
                {product.brand}
              </span>
            </p>
            <p className="text-md pt-2 lg:text-sm">
              Stock:{' '}
              <span className="text-gray-600 dark:text-gray-500">
                {product.stock}
              </span>
            </p>
            <p className="text-4xl font-bold mt-8 dark:text-gray-300 lg:text-3xl">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
