import { NavLink } from 'react-router-dom';
import {
  IoHomeOutline,
  IoPersonOutline,
  IoBagOutline,
  IoShapesOutline,
} from 'react-icons/io5';

const activeLink = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}): string => {
  const base =
    'flex items-center transition ease p-5 rounded-md hover:(text-gray-500) active:(text-gray-500) lg:(p-3 gap-2)';
  return isActive
    ? `${base} text-gray-500 font-bold`
    : isPending
    ? `${base} underline`
    : base;
};

const Header = () => (
  <header className="flex w-full justify-center min-h-auto my-4 rounded-md absolute lg:(relative w-2xl my-2)">
    <nav className="flex w-full mx-12 gap-4 p-2 flex justify-evenly items-center rounded-md border transition ease-in shadow-lg sticky hover:shadow-xl">
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
    </nav>
  </header>
);

export default Header;
