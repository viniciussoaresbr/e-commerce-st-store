import { createContext, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
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

  const removeProductFromCart = (index) => {
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

  const calcShipping = () => {
    const shipping = 10;
    let totalAmount = cartProducts.reduce(
      (prevValue, item) => prevValue + item.quantity,
      0
    );
    return shipping * totalAmount;
  };

  const calcTotalPrice = (subTotalPrice, shipping) => {
    if (subTotalPrice < 250) {
      return subTotalPrice + shipping;
    } else {
      return subTotalPrice;
    }
  };

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        cartProducts,
        removeProductFromCart,
        calcSubTotalPrice,
        calcTotalPrice,
        calcShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
