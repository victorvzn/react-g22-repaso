const ProductItem = ({ product }) => {
  return (
    <article
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
}

export default ProductItem