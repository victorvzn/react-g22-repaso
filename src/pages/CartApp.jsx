import { useEffect, useState } from "react"

import Header from "../components/Header"
import ProductList from "../components/ProductList"

import { fetchProducts } from '../services/products'

const CartApp = () => {
  // TODO: Listar los nombres de los productos en este componente usando el endpoint "https://dummyjson.com/products?skip=0&limit=10"
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data.products))
  }, [])

  return (
    <>
      <Header />

      {/* {JSON.stringify(products)} */}

      <ProductList products={products} />
    </>
  )
}

export default CartApp