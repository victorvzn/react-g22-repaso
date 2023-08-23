import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([ ...cart, product ])
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter(product => product.id !== id)

    setCart(newCart)
  } 

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}