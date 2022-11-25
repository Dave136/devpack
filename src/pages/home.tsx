import {
  IoPersonOutline,
  IoBagOutline,
  IoShapesOutline,
} from 'react-icons/io5';

const Home = () => (
  <div>
    <h2 className="text-2xl text-center mt-8">Welcome!</h2>
    <p className="text-center mt-4">Select an project</p>
    <div className="mt-4 flex flex-col gap-8">
      <div className="shadow-md p-6 rounded-md flex flex-col justify-center items-center gap-2">
        <IoBagOutline size="2em" />
        <h4 className="text-xl">Products</h4>
      </div>
      <div className="shadow-md p-6 rounded-md flex flex-col justify-center items-center gap-2">
        <IoPersonOutline size="2em" />
        <h4 className="text-xl">Users</h4>
      </div>
      <div className="shadow-md p-6 rounded-md flex flex-col justify-center items-center gap-2">
        <IoShapesOutline size="2em" />
        <h4 className="text-xl">Diagram</h4>
      </div>
    </div>
  </div>
);

export default Home;
