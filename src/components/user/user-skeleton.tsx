import { PaginationSkeleton } from '../product/product-skeleton';

const Lines = () => (
  <>
    <div className="w-28 bg-zinc-100 h-4 rounded-md dark:bg-dark-100"></div>
    <div className="w-24 bg-zinc-100 h-4 rounded-md dark:bg-dark-100"></div>
    <div className="w-32 bg-zinc-100 h-4 rounded-md dark:bg-dark-100"></div>
    <div className="w-14 bg-zinc-100 h-4 rounded-md dark:bg-dark-100"></div>
  </>
);

const UserSkeleton = () => {
  return (
    <div className="animate-pulse w-full">
      <div className="w-full bg-light-300 h-[382px] rounded-sm dark:bg-dark-300">
        <div className="w-full bg-zinc-200 h-12 flex items-center gap-8 pl-6 rounded-t-sm dark:bg-dark-200">
          <Lines />
        </div>
        <div className="w-full border border-zinc-300 h-12 flex items-center gap-8 pl-6 dark:border-dark-300">
          <Lines />
        </div>
        <div className="w-full border border-zinc-300 border-t-transparent h-12 flex items-center gap-8 pl-6 dark:border-dark-300">
          <Lines />
        </div>
        <div className="w-full border border-zinc-300 border-t-transparent h-12 flex items-center gap-8 pl-6 dark:border-dark-300">
          <Lines />
        </div>
        <div className="w-full border border-zinc-300 border-t-transparent h-12 flex items-center gap-8 pl-6 dark:border-dark-300">
          <Lines />
        </div>
        <div className="w-full border border-zinc-300 border-t-transparent h-12 flex items-center gap-8 pl-6 dark:border-dark-300">
          <Lines />
        </div>
        <div className="w-full border border-zinc-300 border-t-transparent h-12 flex items-center gap-8 pl-6 dark:border-dark-300">
          <Lines />
        </div>
        <div className="w-full border border-zinc-300 border-t-transparent h-12 flex items-center gap-8 pl-6 rounded-b-sm dark:border-dark-300">
          <Lines />
        </div>
      </div>
      <div className="w-full mt-12">
        <PaginationSkeleton />
      </div>
    </div>
  );
};

export default UserSkeleton;
