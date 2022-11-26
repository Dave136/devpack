import { Outlet } from 'react-router-dom';
import {
  IoHomeOutline,
  IoPersonOutline,
  IoBagOutline,
  IoShapesOutline,
} from 'react-icons/io5';

const Root = () => (
  <div className="flex flex-col-reverse relative min-h-screen lg:(flex-col items-center)">
    <header className="flex w-full justify-center min-h-auto my-4 rounded-md absolute lg:(relative w-3xl my-2)">
      <nav className="flex w-full mx-12 gap-4 p-2 flex justify-evenly items-center rounded-md shadow-2xl border sticky">
        <a
          href="/"
          className="flex items-center transition ease p-5 rounded-md hover:(text-cyan-600) active:(text-cyan-600) lg:(p-3 gap-2)"
        >
          <IoHomeOutline size="2em" />
          <p>Home</p>
        </a>
        <a
          href="product"
          className="flex items-center transition ease p-5 rounded-md hover:(text-cyan-600) active:(text-cyan-600) lg:(p-3 gap-2)"
        >
          <IoBagOutline size="2em" />
          <p>Store</p>
        </a>
        <a
          href="user"
          className="flex items-center transition ease p-5 rounded-md hover:(text-cyan-600) active:(text-cyan-600) lg:(p-3 gap-2)"
        >
          <IoPersonOutline size="2em" />
          <p>Users</p>
        </a>
        <a
          href="diagram"
          className="flex items-center transition ease p-5 rounded-md hover:(text-cyan-600) active:(text-cyan-600) lg:(p-3 gap-2)"
        >
          <IoShapesOutline size="2em" />
          <p>Diagram</p>
        </a>
      </nav>
    </header>
    <main className="flex-1 w-[90%] mx-auto mt-4 mb-12 lg:w-[95%]">
      <Outlet />
    </main>
  </div>
);

export default Root;
