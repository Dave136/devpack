import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';
import ErrorPage from './routes/error';
import Product, { loader as productLoader } from './routes/product';
import User, { loader as userLoader } from './routes/user';
import Diagram from './routes/diagram';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/product',
        element: <Product />,
        loader: productLoader,
      },
      {
        path: '/user',
        element: <User />,
        loader: userLoader,
      },
      {
        path: '/diagram',
        element: <Diagram />,
      },
    ],
  },
]);
