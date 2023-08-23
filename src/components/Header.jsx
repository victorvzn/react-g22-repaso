import { useState } from "react"

import { useContext } from "react"

import { CartContext } from "../context/cart"

const Header = () => {
  const [openCart, setOpenCart] = useState(false)

  const { cart, removeFromCart } = useContext(CartContext)

  const handleOpenCart = () => {
    setOpenCart(!openCart)
  }

  return (
    <header className="bg-green-500">
      <div className="container mx-auto py-3 flex justify-between">
        <h1 className="text-3xl text-white">CartApp</h1>

        <section className="relative">
          <button onClick={handleOpenCart}>Cart ({cart.length})</button>

          {/* -{JSON.stringify(cart)}- */}

          {openCart && (
            <div className="absolute right-0 bg-white shadow-lg border rounded-lg w-96 p-4">
              <h3 className="text-2xl ">Carrito de compras</h3>

              <div className="pt-4">
                <ul>
                  {cart.map(product => {
                    return (
                      <li
                        key={product.id}
                        className="bg-slate-200 mb-3 p-3 flex justify-between"
                      >
                        {product.title} (x1) - $549
                        <button
                          className="bg-red-600 p-2 text-white"
                          onClick={() => removeFromCart(product.id)}
                        >✖</button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )}
        </section>

      </div>
    </header>
  )
}

export default Header