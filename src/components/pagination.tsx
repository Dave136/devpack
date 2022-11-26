import ReactPaginate from 'react-paginate';

type Props = {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

const Pagination = ({ pageCount, onPageChange }: Props) => {
  return (
    <ReactPaginate
      previousLabel="Prev"
      nextLabel="Next"
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      containerClassName="flex list-none items-center"
      previousLinkClassName="p-2 px-4 text-sm border border-[#dcdcdc] rounded-md mr-3 cursor-pointer"
      breakClassName="p-2 px-4 text-sm border border-[#dcdcdc] rounded-md mr-3 cursor-pointer"
      nextLinkClassName="p-2 px-4 text-sm border border-[#dcdcdc] rounded-md mr-3 cursor-pointer"
      pageClassName="p-2 px-4 text-sm border border-[#dcdcdc] rounded-md mr-3 cursor-pointer"
      disabledClassName="cursor-not-allowed"
      activeClassName="border-2 border-gray-900"
      onPageChange={onPageChange}
    />
  );
};

export default Pagination;
