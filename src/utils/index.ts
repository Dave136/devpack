export const generateId = () => crypto.randomUUID();

export const getProductWrapperStyle = (viewport: any, size: number) => {
  if (viewport.laptop || viewport.desktop) {
    return {
      gridTemplateColumns: `repeat(${size}, 1fr)`,
    };
  }

  return {};
};
