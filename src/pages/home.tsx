import {
  IoPersonOutline,
  IoBagOutline,
  IoShapesOutline,
} from 'react-icons/io5';

const projects = [
  {
    icon: IoBagOutline,
    text: 'Store section',
    to: '/product',
  },
  {
    icon: IoPersonOutline,
    text: 'Users section',
    to: '/user',
  },
  {
    icon: IoShapesOutline,
    text: 'Diagrams section',
    to: '/diagram',
  },
];

const Home = () => (
  <div>
    <h2 className="text-2xl text-center mt-8">Welcome!</h2>
    <p className="text-center mt-4">Select an project</p>
    <div className="mt-12 flex flex-col gap-12 items-center justify-center mx-auto lg:(flex-row w-full)">
      {projects.map((project) => (
        <a href={project.to}>
          <div className="border border-gray-300 text-gray-500 shadow-xl p-6 rounded-md flex flex-col justify-center items-center gap-2 cursor-pointer transition hover:(shadow-2xl border-gray-400 text-gray-600) active:(shadow-2xl border-gray-400 text-gray-600) lg:(w-42 h-38)">
            <project.icon size="2em" />
            <h4 className="text-sm">{project.text}</h4>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Home;
