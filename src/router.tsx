import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from './pages/home';
import ErrorPage from './pages/error';
import Product, { loader as productLoader } from './pages/product';
import User, { loader as userLoader } from './routes/user';
import Diagram from './pages/diagram';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
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
