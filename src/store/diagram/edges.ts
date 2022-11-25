import type { Edge } from 'reactflow';

const edges: Edge[] = [
  { id: 'inicio', source: 'inicio', target: 'menu' },
  { id: 'menu-about', source: 'menu', target: 'about' },
  { id: 'menu-product', source: 'menu', target: 'product' },
  { id: 'menu-shop', source: 'menu', target: 'shop' },
  { id: 'menu-blog', source: 'menu', target: 'blog' },
  { id: 'about', source: 'about', target: 'header' },
  { id: 'about-container', source: 'about', target: 'container' },
  { id: 'product', source: 'product', target: 'header' },
  { id: 'product-container', source: 'product', target: 'container' },
  { id: 'shop', source: 'shop', target: 'header' },
  { id: 'shop-container', source: 'shop', target: 'container' },
  { id: 'blog', source: 'blog', target: 'header' },
  { id: 'blog-container', source: 'blog', target: 'container' },
  { id: 'header', source: 'header', target: 'content' },
  { id: 'container', source: 'container', target: 'content' },
  { id: 'content', source: 'content', target: 'footer' },
];

export default edges;
