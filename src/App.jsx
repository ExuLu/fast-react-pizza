import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './UI/Home.jsx';
import Error from './UI/Error.jsx';
import Menu from './features/menu/Menu.jsx';
import { loader as menuLoader } from './features/menu/menuLoader.js';
import Cart from './features/cart/Cart.jsx';
import CreateOrder from './features/order/CreateOrder.jsx';
import Order from './features/order/Order.jsx';
import { loader as orderLoader } from './features/order/orderLoader.js';
import AppLayout from './UI/AppLayout.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
