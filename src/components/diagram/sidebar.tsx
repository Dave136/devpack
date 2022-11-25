import { useCallback } from 'react';
import {
  IoBrowsersOutline,
  IoCreateOutline,
  IoReaderOutline,
  IoGridOutline,
  IoAddOutline,
} from 'react-icons/io5';
import useStore, { type NodeData } from '../../store/diagram';
import { generateId } from '../../utils';
import type { Node } from 'reactflow';

export default () => {
  const { addNode } = useStore();
  const onDragStart = (event: any, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const addNewNode = useCallback(() => {
    const newNode: Node<NodeData> = {
      id: generateId(),
      data: { title: 'Custom', subTitle: 'short description' },
      type: 'custom',
      position: {
        x: 100,
        y: 100,
      },
    };
    addNode(newNode);
  }, [addNode]);

  return (
    <aside className="mt-12 h-18 flex justify-evenly text-xs border rounded-md border-gray-400 lg:(w-[5%] h-62 flex-col max-w-[250px])">
      <div
        className="flex justify-center items-center cursor-[grab] text-gray-900"
        onDragStart={(event) => onDragStart(event, 'customInput')}
        draggable
        title="Custom node"
      >
        <IoCreateOutline size="2em" />
      </div>
      <div
        className="flex justify-center items-center cursor-[grab] text-gray-900"
        onDragStart={(event) => onDragStart(event, 'page')}
        draggable
        title="Page node"
      >
        <IoBrowsersOutline size="2em" />
      </div>

      <div
        className="flex justify-center items-center cursor-[grab] text-gray-900"
        onDragStart={(event) => onDragStart(event, 'output')}
        draggable
        title="Element node"
      >
        <IoReaderOutline size="2em" />
      </div>
      <div
        className="flex justify-center items-center cursor-[grab] text-gray-900"
        onDragStart={(event) => onDragStart(event, 'output')}
        draggable
        title="Element item node"
      >
        <IoGridOutline size="2em" />
      </div>

      <div
        className="flex justify-center items-center cursor-[grab]"
        title="Create"
      >
        <button
          className="w-10 h-10 rounded-full text-gray-700 flex items-center justify-center transition ease hover:(bg-cyan-700 bg-gray-700 text-white) active:(bg-cyan-700 bg-gray-700 text-white)"
          type="button"
          onClick={addNewNode}
        >
          <IoAddOutline size="2em" />
        </button>
      </div>
    </aside>
  );
};
