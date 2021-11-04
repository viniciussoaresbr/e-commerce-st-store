import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART":
        if (
          state.cartProducts.some(product => {
            return product.id === action.payload.product.id;
          })
        ) {
          return {
            ...state,
            cartProducts: state.cartProducts.map(product => {
              if (product.id === action.payload.product.id) {
                return { ...product, quantity: product.quantity + 1 };
              }
              return product;
            }),
          };
        } else {
          return {
            ...state,
            cartProducts: [
              ...state.cartProducts,
              { ...action.payload.product, quantity: 1 },
            ],
          };
        }
      case "REMOVE_PRODUCT_FROM_CART":
        if (action.payload.product.quantity > 1) {
          return {
            ...state,
            cartProducts: state.cartProducts.map(product => {
              if (product.id === action.payload.product.id) {
                return { ...product, quantity: product.quantity - 1 };
              }
              return product;
            }),
          };
        } else {
          return {
            ...state,
            cartProducts: state.cartProducts.filter(product => {
              return product.id !== action.payload.product.id;
            }),
          };
        }
      case "CALC_SUBTOTAL":
        return {
          ...state,
          subtotal: state.cartProducts.reduce((prevValue, product) => {
            return prevValue + product.price * product.quantity;
          }, 0),
        };
      case "CALC_SHIPPING":
        const initialShipping = 10;
        let totalAmount = state.cartProducts.reduce((prevValue, product) => {
          return prevValue + product.quantity;
        }, 0);
        return {
          ...state,
          shipping: initialShipping * totalAmount,
        };

      case "CALC_TOTAL":
        if (state.subtotal < 250) {
          return {
            ...state,
            total: state.subtotal + state.shipping,
          };
        } else {
          return {
            ...state,
            total: state.subtotal,
          };
        }
    }
  };

  const [state, dispatch] = useReducer(cartReducer, {
    cartProducts: [],
    shipping: 0,
    subtotal: 0,
    total: 0,
  });

  useEffect(() => {
    calcSubTotalPrice();
    calcShipping();
    calcTotalPrice();
  }, [state.cartProducts]);

  const addProductToCart = product => {
    dispatch({ type: "ADD_PRODUCT_TO_CART", payload: { product } });
  };

  const removeProductFromCart = product => {
    dispatch({ type: "REMOVE_PRODUCT_FROM_CART", payload: { product } });
  };

  const calcSubTotalPrice = () => dispatch({ type: "CALC_SUBTOTAL" });

  const calcShipping = () => dispatch({ type: "CALC_SHIPPING" });

  const calcTotalPrice = () => dispatch({ type: "CALC_TOTAL" });

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        removeProductFromCart,
        state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
