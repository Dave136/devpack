export interface DataPanel {
  id: string;
  title: string;
  subTitle: string;
  type?: string;
  position?: {
    x: number;
    y: number;
  };
}

export const dataPanel: DataPanel[] = [
  {
    id: 'inicio',
    title: 'Inicio',
    subTitle: 'Info de la Pagina',
    position: {
      x: -150,
      y: 120,
    },
  },
  {
    id: 'about',
    title: 'Acerca de',
    subTitle: 'Info de la Pagina',
    type: 'page',
    position: {
      x: 180,
      y: 0,
    },
  },
  {
    id: 'product',
    title: 'Productos',
    subTitle: 'Info de la Pagina',
    type: 'page',
    position: {
      x: 180,
      y: 80,
    },
  },
  {
    id: 'shop',
    title: 'Tienda',
    subTitle: 'Info de la Pagina',
    type: 'page',
    position: {
      x: 180,
      y: 160,
    },
  },
  {
    id: 'blog',
    title: 'Blogs',
    subTitle: 'Info de la Pagina',
    type: 'page',
    position: {
      x: 180,
      y: 240,
    },
  },
  {
    id: 'header',
    title: 'Header',
    subTitle: 'Control interno de la pagina',
    type: 'element',
    position: {
      x: 360,
      y: 100,
    },
  },
  {
    id: 'container',
    title: 'Container',
    subTitle: 'Control interno de la pagina',
    type: 'element',
    position: {
      x: 360,
      y: 200,
    },
  },
  {
    id: 'content',
    title: 'Content',
    subTitle: 'Control interno de la pagina',
    type: 'element-item',
    position: {
      x: 540,
      y: 150,
    },
  },
  {
    id: 'menu',
    title: 'Menu',
    subTitle: 'Control interno de la pagina',
    type: 'element-item',
    position: {
      x: 20,
      y: 120,
    },
  },
  {
    id: 'footer',
    title: 'Footer',
    subTitle: 'Control interno de la pagina',
    type: 'element',
    position: {
      x: 720,
      y: 150,
    },
  },
];
