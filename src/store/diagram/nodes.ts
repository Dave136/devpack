import { dataPanel } from '../../data';
import type { Node } from 'reactflow';

const generateNodes = (): Node[] =>
  dataPanel.map(
    ({ id, type = 'custom', position = { x: 0, y: 0 }, ...data }) => ({
      id,
      type,
      data,
      position,
    })
  );

const nodes: Node[] = generateNodes();

export default nodes;
