import type { Viewport } from '@/hooks/use-viewport';

type ProductWrapperStyle = {
  gridTemplateColumns?: string;
};

/**
 * Generate a unique identifier
 * @returns {string} The unique identifier
 */
export const generateId = (): string => crypto.randomUUID();

/**
 * Dinamically set the template columns
 * @param {Viewport} viewport element returned from the useViewport hook
 * @param size columns to display
 * @returns {ProductWrapperStyle | undefined} for the component style
 */
export const getProductWrapperStyle = (
  viewport: Viewport,
  size: number
): ProductWrapperStyle | undefined => {
  if (viewport.laptop || viewport.desktop) {
    return {
      gridTemplateColumns: `repeat(${size}, 1fr)`,
    };
  }

  return {};
};
