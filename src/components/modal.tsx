type Sizes = 'small' | 'medium' | 'large';

type Props = {
  active: boolean;
  children: JSX.Element | JSX.Element[];
  size?: Sizes;
  onClose?: () => void;
};

type ModalSizes = {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
};

const sizes: ModalSizes = {
  small: 'md:w-xl',
  medium: 'md:w-2xl',
  large: 'md:w-5xl',
};

const Modal = ({ children, onClose, active, size = 'small' }: Props) => {
  if (!active) {
    return <div></div>;
  }

  const modalSize = sizes[size];

  return (
    <div className="absolute top-0 left-0 w-full h-full min-h-screen bg-black backdrop-filter backdrop-blur-sm bg-opacity-50 mt-0 flex justify-center items-start pt-22 transition ease overflow-hidden">
      <div
        className={`w-[90%] ${modalSize} bg-white p-8 rounded-md relative transition ease dark:bg-dark-400`}
      >
        <span
          className="text-2xl cursor-pointer absolute top-2 right-4"
          onClick={onClose}
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
