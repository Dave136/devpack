import { Outlet } from 'react-router-dom';
import {
  IoHomeOutline,
  IoPersonOutline,
  IoBagOutline,
  IoShapesOutline,
} from 'react-icons/io5';

const Root = () => (
  <div className="flex flex-col-reverse relative min-h-screen">
    <aside className="flex w-full justify-center min-h-auto my-4 rounded-md absolute">
      <nav className="flex w-full mx-4 gap-4 p-4 flex justify-evenly items-center rounded-md shadow-xl">
        <a
          href="/"
          className="flex items-center transition ease p-5 rounded-md hover:(text-cyan-600) active:(text-cyan-600)"
        >
          <IoHomeOutline size="2em" />
        </a>
        <a
          href="product"
          className="flex items-center transition ease p-5 rounded-md hover:(text-cyan-600) active:(text-cyan-600)"
        >
          <IoBagOutline size="2em" />
        </a>
        <a
          href="user"
          className="flex items-center transition ease p-5 rounded-md hover:(text-cyan-600) active:(text-cyan-600)"
        >
          <IoPersonOutline size="2em" />
        </a>
        <a
          href="diagram"
          className="flex items-center transition ease p-5 rounded-md hover:(text-cyan-600) active:(text-cyan-600)"
        >
          <IoShapesOutline size="2em" />
        </a>
      </nav>
    </aside>
    <main className="flex-1 w-[90%] mx-auto mt-4">
      <Outlet />
    </main>
  </div>
);

export default Root;
