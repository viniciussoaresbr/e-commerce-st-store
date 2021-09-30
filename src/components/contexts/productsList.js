import { createContext, useEffect, useState } from "react";

export const ProductsListContext = createContext({});

const ProductListProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <ProductsListContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsListContext.Provider>
  );
};

export default ProductListProvider;
