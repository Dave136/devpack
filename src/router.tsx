import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from './pages/home';
import ErrorPage from './pages/error';
import Product from './pages/product';
import User from './pages/user';
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
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/diagram',
        element: <Diagram />,
      },
    ],
  },
]);
