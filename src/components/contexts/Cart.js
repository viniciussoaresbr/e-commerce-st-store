import { createContext, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [shipping, setShipping] = useState(0);

  const addProduct = (product) => {
    let quantity = 1;
    product.quantity = quantity;
    let existProduct = cartProducts.some((item) => item.id === product.id);

    if (existProduct) {
      setCartProducts(
        cartProducts.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    } else {
      setCartProducts([...cartProducts, product]);
    }
  };

  const removeProduct = (index) => {
    setCartProducts(
      cartProducts.filter((product, i) => {
        return index !== i;
      })
    );
  };

  const calcSubTotalPrice = () => {
    return cartProducts.reduce(
      (prevValue, item) => prevValue + item.price * item.quantity,
      0
    );
  };

  const incrementShipping = () => {
    setShipping(shipping + 10);
  };

  const decreaseShipping = () => {
    setShipping(shipping - 10);
  };

  const calcTotalPrice = (subTotalPrice) => {
    if (subTotalPrice < 250) {
      return subTotalPrice + shipping;
    } else {
      return subTotalPrice;
    }
  };

  return (
    <CartContext.Provider
      value={{
        addProduct,
        cartProducts,
        removeProduct,
        calcSubTotalPrice,
        calcTotalPrice,
        incrementShipping,
        decreaseShipping,
        shipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
