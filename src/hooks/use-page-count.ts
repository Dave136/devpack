import { useEffect, useState } from 'react';
import { PAGE_LIMIT } from '@/constants';

type UsePageCountParams = {
  total: number;
};

const usePageCount = ({ total }: UsePageCountParams) => {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (!total) return;

    const calc = Math.ceil(total / PAGE_LIMIT);
    setPageCount(calc - 1);
  }, [total]);

  return pageCount;
};

export default usePageCount;
