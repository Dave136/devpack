import ReactPaginate from 'react-paginate';

type Props = {
  pageCount: number;
  page?: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

const Pagination = ({ pageCount, onPageChange, page = 1 }: Props) => {
  return (
    <ReactPaginate
      previousLabel="Prev"
      nextLabel="Next"
      breakLabel={'...'}
      pageCount={pageCount}
      forcePage={page - 1}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      containerClassName="flex list-none items-center"
      previousLinkClassName="p-2 px-4 text-sm border border-gray-300 rounded-md mr-3 cursor-pointer dark:(border-transparent bg-dark-400)"
      breakClassName="p-2 px-4 text-sm border border-gray-300 rounded-md mr-3 cursor-pointer dark:(border-transparent bg-dark-400)"
      nextLinkClassName="p-2 px-4 text-sm border border-gray-300 rounded-md mr-3 cursor-pointer dark:(border-transparent bg-dark-400)"
      pageLinkClassName="p-2 px-4 text-sm border border-gray-300 rounded-md mr-3 cursor-pointer dark:(border-transparent bg-dark-400)"
      disabledClassName="cursor-not-allowed"
      activeLinkClassName="border-2 border-gray-700 dark:border-gray-600"
      onPageChange={onPageChange}
    />
  );
};

export default Pagination;
