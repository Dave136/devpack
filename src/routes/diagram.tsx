import { useState, useRef, useCallback, DragEvent } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  type ReactFlowInstance,
  type Node,
  type OnInit,
  type NodeTypes,
} from 'reactflow';
import Sidebar from '../components/diagram/sidebar';
import useStore from '../store/diagram';
import { generateId } from '../utils';
import CustomNode from '../components/diagram/custom-node';
import 'reactflow/dist/style.css';

const nodeTypes: NodeTypes = {
  custom: CustomNode,
  page: CustomNode,
  element: CustomNode,
  'element-item': CustomNode,
};

const Diagram = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } =
    useStore();

  const onDragOver = useCallback((event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const reactFlowBounds =
        reactFlowWrapper?.current?.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance!.project({
        x: event.clientX - reactFlowBounds!.left,
        y: event.clientY - reactFlowBounds!.top,
      });

      const newNode: Node = {
        id: generateId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      addNode(newNode);
    },
    [reactFlowInstance]
  );

  return (
    <div className="flex flex-col flex-grow h-auto lg:flex-row lg:gap-8 relative">
      <ReactFlowProvider>
        <div
          className="flex-grow-1 h-full min-h-xl w-full"
          ref={reactFlowWrapper}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance as unknown as OnInit<any, any>}
            onDrop={onDrop}
            onDragOver={onDragOver}
            className="w-full min-h-xl dark:bg-dark-500"
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default Diagram;
