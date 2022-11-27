import type { Product } from '@/types';
import type { MouseEvent } from 'react';

type Props = {
  product: Product;
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
};

const ProductCard = ({ product, onClick }: Props) => (
  <li
    key={product.id}
    className="cursor-pointer shadow-xl w-62 rounded-md transition-shadow ease hover:shadow-2xl dark:bg-dark-500"
    onClick={onClick}
  >
    <img
      className="w-full h-48 object-center object-fill rounded-t-md"
      src={product.thumbnail}
      alt={product.description}
    />
    <div className="p-4 flex flex-col justify-between">
      <header className="">
        <h3 className="text-base flex items-center gap-2">{product.title} </h3>
        {/* <span className="text-[10px] text-gray-500 rounded-full text-center underline dark:(text-gray-400 border-gray-400)">
          {product.brand}
        </span> */}
      </header>
      {/* <p className="text-xs text-gray-600 mb-4 dark:text-gray-500">
        {product.description}
      </p> */}
      <div>
        <span className="text-[10px] text-gray-500 rounded-full text-center inline-block mb-4 dark:(text-gray-500 border-gray-400)">
          {product.brand}
        </span>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-200">
          ${product.price}
        </p>
      </div>
    </div>
  </li>
);

export default ProductCard;
