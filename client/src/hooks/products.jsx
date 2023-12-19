import { createContext, useContext, useState } from 'react'

const ProductsContext = createContext([])
ProductsContext.displayName = 'ProductsContext'


const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState("")

  const cart = products.filter(product => product.cart)

  return (
    <ProductsContext.Provider value={{products, cart, setProducts, query, setQuery}}>
      {children}
    </ProductsContext.Provider>
  )
}

const useProducts = () => useContext(ProductsContext)

export { ProductsProvider, useProducts }
