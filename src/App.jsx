import CartApp from "./pages/CartApp"

import { CartProvider } from './context/cart.jsx'

function App() {
  return (
    <>
      <CartProvider>
        <CartApp />
      </CartProvider>
    </>
  )
}

export default App
