import { useEffect, useState } from 'react';

const PAGE_LIMIT = 10;

const usePageCount = ({ total }: { total: number }) => {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (!total) return;

    const calc = Math.ceil(total / PAGE_LIMIT);
    setPageCount(calc - 1);
  }, [total]);

  return pageCount;
};

export default usePageCount;
