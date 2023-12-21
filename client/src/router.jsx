import {
  createBrowserRouter,
  RouterProvider as RouterProviderRRD,
} from 'react-router-dom'

import RootLayout from 'layouts/RootLayout'
import ErrorPage from 'pages/ErrorPage'
import OrderPage from './pages/OrderPage'
import ProductsPage from './pages/ProductsPage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoute from './utils/ProtectedRoute'
import DescriptionPage from './pages/DescriptionPage'

const WorkdaysPage = () => <h1>workdays</h1>

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ProductsPage />,
      },
      {
        path: '/user/orders',
        element: <OrderPage/>,
      },
       {
        path: '/products',
        element: <ProductsPage />,
      }, 
      {
        path: '/products/description/:name',
        element: < DescriptionPage/>,
      },
   /*    {
        path: '/customer/new',
        element: <ProtectedRoute page={AddCustomerPage} role="anonymous" />,
      },
      {
        path: '/customer/edit/:customerId',
        element: <ProtectedRoute page={EditCustomerPage}  role="anonymous" />,
      }, */
      {
        path: '/login',
        element: <ProtectedRoute page={LoginPage} role="anonymous" />,
      },
      {
        path: '/register',
        element: <ProtectedRoute page={RegisterPage} role="anonymous" />,
      },
      {
        path: '/logout',
        element: <ProtectedRoute page={LogoutPage} role="auth" />,
      },
    ],
  },
])

const RouterProvider = ({ children }) => <RouterProviderRRD router={router} />

export default RouterProvider
