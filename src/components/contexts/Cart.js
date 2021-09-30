import { createContext, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProduct = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  return (
    <CartContext.Provider value={{ addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
