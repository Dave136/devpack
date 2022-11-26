import create from 'zustand';

type State = {
  sizes: number[];
  selectedSize: number;
  updateRowSize: (size: number) => void;
};

const initialSizes = [2, 3, 4, 5];

const useStore = create<State>((set) => ({
  sizes: initialSizes,
  selectedSize: 4,
  updateRowSize: (size: number) => {
    set({
      selectedSize: size,
    });
  },
}));

export default useStore;
