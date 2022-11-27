import type { Product } from '@/types';
import type { MouseEvent } from 'react';

type Props = {
  product: Product;
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
};

const ProductCard = ({ product, onClick }: Props) => (
  <li
    key={product.id}
    className="cursor-pointer shadow-xl w-[80%] rounded-md transition-shadow ease hover:shadow-2xl dark:bg-dark-500 lg:w-62"
    onClick={onClick}
  >
    <img
      className="w-full h-52 object-center object-fill rounded-t-md lg:h-48"
      src={product.thumbnail}
      alt={product.description}
    />
    <div className="p-5 flex flex-col justify-between lg:p-4">
      <header>
        <h4 className="text-lg flex items-center lg:text-base">
          {product.title}
        </h4>
      </header>
      <div>
        <span className="text-sm text-gray-500 rounded-full text-center inline-block mb-4 dark:(text-gray-500 border-gray-400) lg:text-[10px]">
          {product.brand}
        </span>
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-200 lg:text-2xl">
          ${product.price}
        </p>
      </div>
    </div>
  </li>
);

export default ProductCard;
