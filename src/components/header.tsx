import { NavLink } from 'react-router-dom';
import {
  IoHomeOutline,
  IoPersonOutline,
  IoBagOutline,
  IoShapesOutline,
} from 'react-icons/io5';
import DarkMode from './dark-mode';

const activeLink = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}): string => {
  const base =
    'flex flex-col items-center transition ease p-5 rounded-md text-sm hover:(text-gray-500) active:(text-gray-500) lg:(flex-row p-3 gap-2)';
  return isActive
    ? `${base} text-gray-700 font-bold dark:text-gray-200`
    : isPending
    ? `${base} underline`
    : base;
};

const Header = () => (
  <header className="flex w-full justify-center min-h-auto my-4 mt-6 rounded-md lg:(w-2xl my-2 mt-6)">
    <nav className="flex w-full mx-12 gap-4 p-2 flex justify-evenly items-center rounded-md transition ease-in shadow-lg sticky hover:shadow-xl dark:(bg-dark-500)">
      <NavLink to="/" className={activeLink}>
        <IoHomeOutline size="1.6em" />
        <p>Home</p>
      </NavLink>
      <NavLink to="/product" className={activeLink}>
        <IoBagOutline size="1.6em" />
        <p>Store</p>
      </NavLink>
      <NavLink to="/user" className={activeLink}>
        <IoPersonOutline size="1.6em" />
        <p>Users</p>
      </NavLink>
      <NavLink to="/diagram" className={activeLink}>
        <IoShapesOutline size="1.6em" />
        <p>Diagram</p>
      </NavLink>
      <DarkMode />
    </nav>
  </header>
);

export default Header;
