import { useEffect, useState } from "react"

const CartApp = () => {
  // TODO: Listar los nombres de los productos en este componente usando el endpoint "https://dummyjson.com/products?skip=0&limit=10"
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const url = 'https://dummyjson.com/products?skip=0&limit=10'

    const response = await fetch(url)

    const data = await response.json()

    return data
  }

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data.products))
  }, [])

  return (
    <>
      <header className="bg-green-500">
        <div className="container mx-auto py-3 flex justify-between">
          <h1 className="text-3xl text-white">CartApp</h1>

          <button>Cart (5)</button>
        </div>
      </header>

      {/* {JSON.stringify(products)} */}

      <main className="container mx-auto mt-8">
        <section className="grid grid-cols-5 gap-8">
          {products.map(product => {
            return (
              <article
                key={product.id}
                className="border rounded-lg shadow"
              >
                <img src={product.thumbnail} className="object-contain h-48" />
                <div className="px-5 py-3">
                  <h5 className="text-xl font-semibold">{product.title}</h5>
                </div>
                <div className="px-5 py-3 flex justify-between">
                  <span className="text-3xl font-bold">${product.price}</span>
                  <button
                    className="bg-green-400 px-5 py-2 text-center rounded-lg font-medium text-white hover:bg-green-500 duration-300"
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            )
          })}
        </section>
      </main>
    </>
  )
}

export default CartApp