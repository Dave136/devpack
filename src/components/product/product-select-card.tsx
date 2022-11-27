import useStore from '@/store/product';

const ProductSelectCard = () => {
  const { sizes, selectedSize, updateRowSize } = useStore();
  return (
    <div className="flex gap-2 items-center">
      <p className="text-xs text-gray-700 dark:text-gray-500">
        Elements by row:{' '}
      </p>
      <select
        className="border bg-transparent rounded-sm px-2 dark:(border-gray-400 text-gray-400)"
        onChange={(e) => {
          const newVal = Number(e.target.value);
          updateRowSize(newVal);
        }}
      >
        {sizes.map((size, index) =>
          size !== selectedSize ? (
            <option value={size} key={index}>
              {size}
            </option>
          ) : (
            <option value={size} defaultValue={size} key={index} selected>
              {size}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default ProductSelectCard;
