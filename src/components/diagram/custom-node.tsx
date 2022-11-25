import { useCallback, type FC, type ChangeEvent } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import useStore, { type NodeData } from '../../store/diagram';
import { icons, theme } from './theme';

const CustomNode: FC<NodeProps<NodeData>> = ({ data, id, type }) => {
  const { updateNode, nodes, edges } = useStore();

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    updateNode(id, { [event.target.name]: event.target.value });
  }, []);

  const colors = theme[type] || theme.custom;
  const Icon = icons[type] || icons.custom;
  const [leftId, rightId] = [`${id}.left`, `${id}.right`];

  const elementIndex = nodes.findIndex((node) => node.id === id);
  const isFirstElement = elementIndex === 0;
  const isLastElement = elementIndex === nodes.length - 1;

  return (
    <div className={`border ${colors.border} rounded-md max-w-32`}>
      {!isFirstElement && (
        <Handle type="target" id={leftId} position={Position.Left} />
      )}
      <div className={`flex items-center p-2 ${colors.bg} rounded-t-sm`}>
        <Icon className="mr-1 text-white" />
        <input
          className={`w-full h-4 outline-none ${colors.bg} text-[10px] text-white`}
          type="text"
          id="title"
          name="title"
          onChange={onChange}
          value={data.title}
        />
      </div>
      <div className="p-2 pt-1">
        <input
          type="text"
          className="w-full h-4 outline-none text-[10px] bg-transparent"
          id="subTitle"
          name="subTitle"
          onChange={onChange}
          value={data.subTitle}
        />
      </div>
      {!isLastElement && (
        <Handle type="source" id={rightId} position={Position.Right} />
      )}
    </div>
  );
};

export default CustomNode;
