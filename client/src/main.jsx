import ReactDOM from 'react-dom/client'

import './bootstrap.js'

import RouterProvider from './router'
import { AuthProvider, ProductsProvider } from 'hooks'


ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider>
      <ProductsProvider>
         <RouterProvider />
      </ProductsProvider>
    </AuthProvider>

)
