import type { Product } from '@/types';
import type { MouseEvent } from 'react';

type Props = {
  product: Product;
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
};

const ProductCard = ({ product, onClick }: Props) => (
  <li
    key={product.id}
    className="cursor-pointer shadow-xl w-62 rounded-md transition-shadow ease hover:shadow-2xl"
    onClick={onClick}
  >
    <img
      className="w-full h-48 object-center object-fill rounded-t-md"
      src={product.thumbnail}
      alt={product.description}
    />
    <div className="p-4 flex flex-col justify-between">
      <h3 className="text-base flex items-center gap-2 mb-2">
        {product.title}{' '}
        <span className="text-[10px] text-gray-500 rounded-full border px-2 py-1 text-center">
          {product.brand}
        </span>
      </h3>
      <p className="text-xs text-gray-600 mb-4">{product.description}</p>
      <p className="text-xl font-bold text-gray-900">${product.price}</p>
    </div>
  </li>
);

export default ProductCard;
