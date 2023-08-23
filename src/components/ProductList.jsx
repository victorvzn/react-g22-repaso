import ProductItem from "./ProductItem"

const ProductList = ({ products }) => {
  return (
    <main className="container mx-auto mt-8">
      <section className="grid grid-cols-5 gap-8">
        {products.map(product => {
          return (
            <ProductItem
              key={product.id}
              product={product}
            />
          )
        })}
      </section>
    </main>
  )
}

export default ProductList