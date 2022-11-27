import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import useDarkMode from '@/hooks/user-dark-mode';

const DarkMode = () => {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <button
      className="px-2 border-l pl-4 flex items-center cursor-pointer transition ease hover:text-gray-400"
      onClick={toggleDark}
    >
      {isDark ? (
        <IoSunnyOutline size="1.6em" />
      ) : (
        <IoMoonOutline size="1.6em" />
      )}
    </button>
  );
};

export default DarkMode;
