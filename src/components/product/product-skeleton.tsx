import useStore from '@/store/product';

const CardSkeleton = () => (
  <div className="w-62 border border-light-400 rounded-md dark:border-dark-300">
    <div className="w-full bg-light-500 h-48 rounded-t-md dark:bg-dark-300"></div>
    <div className="px-4">
      <div className="flex my-4 gap-2">
        <div className="w-9/12 bg-light-500 h-4 rounded-md dark:bg-dark-300"></div>
        <div className="w-1/4 bg-light-500 h-4 rounded-md dark:bg-dark-300"></div>
      </div>
      <div>
        <div className="bg-light-500 my-4 h-4 rounded-md dark:bg-dark-300"></div>
        <div className="bg-light-500 my-4 h-4 rounded-md dark:bg-dark-300"></div>
      </div>
      <div className="w-24 bg-light-500 my-4 h-4 rounded-md dark:bg-dark-300"></div>
    </div>
  </div>
);

export const PaginationSkeleton = () => (
  <div className="w-full h-16 flex items-center gap-4 justify-center">
    <div className="w-22 bg-zinc-200 h-8 rounded-md dark:bg-dark-300"></div>
    <div className="w-12 bg-zinc-200 h-8 rounded-md dark:bg-dark-300"></div>
    <div className="w-12 bg-zinc-200 h-8 rounded-md dark:bg-dark-300"></div>
    <div className="w-12 bg-zinc-200 h-8 rounded-md dark:bg-dark-300"></div>
    <div className="w-12 bg-zinc-200 h-8 rounded-md dark:bg-dark-300"></div>
    <div className="w-22 bg-zinc-200 h-8 rounded-md dark:bg-dark-300"></div>
  </div>
);

const ProductSkeleton = () => {
  const { selectedSize } = useStore();

  return (
    <div className="animate-pulse w-full">
      <div
        className="grid grid-cols-4 gap-16"
        style={{ gridTemplateColumns: `repeat(${selectedSize}, 1fr)` }}
      >
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="w-full mt-12">
        <PaginationSkeleton />
      </div>
    </div>
  );
};

export default ProductSkeleton;
