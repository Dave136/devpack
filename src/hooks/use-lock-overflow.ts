import { useEffect } from 'react';

/**
 * Hide the body overflow when condition is true, otherwise remove hidden overflow class
 * @param condition {boolean} Any boolean conditional
 */

const useLockOverflow = (condition: boolean) => {
  useEffect(() => {
    if (!condition) {
      document.body.classList.remove('overflow-hidden');
      return;
    }

    document.body.classList.add('overflow-hidden');
  }, [condition]);
};

export default useLockOverflow;
