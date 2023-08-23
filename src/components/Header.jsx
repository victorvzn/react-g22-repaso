import { useState } from "react"

const Header = () => {
  const [openCart, setOpenCart] = useState(false)

  const handleOpenCart = () => {
    setOpenCart(!openCart)
  }

  return (
    <header className="bg-green-500">
      <div className="container mx-auto py-3 flex justify-between">
        <h1 className="text-3xl text-white">CartApp</h1>

        <section className="relative">
          <button onClick={handleOpenCart}>Cart (5)</button>

          {openCart && (
            <div className="absolute right-0 bg-slate-500 w-60 h-96 p-4">
            <h3 className="text-2xl text-white">Carrito de compras</h3>

            <div className="pt-4">
              <ul>
                <li>Product (x1) - $549</li>
                <li>Product (x1) - $549</li>
                <li>Product (x1) - $549</li>
                <li>Product (x1) - $549</li>
                <li>Product (x1) - $549</li>
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