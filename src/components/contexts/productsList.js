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

  const orderProducts = (order) => {
    switch (order) {
      case "alphabeticalOrder":
        setProducts([
          ...products.sort((a, b) => {
            return a.name < b.name ? -1 : 1;
          }),
        ]);
        break;
      case "score":
        setProducts([
          ...products.sort((a, b) => {
            return a.score > b.score ? -1 : 1;
          }),
        ]);
        break;
      case "lowerPrice":
        setProducts([
          ...products.sort((a, b) => {
            return a.price < b.price ? -1 : 1;
          }),
        ]);
        break;
      case "higherPrice":
        setProducts([
          ...products.sort((a, b) => {
            return a.price > b.price ? -1 : 1;
          }),
        ]);
        break;
      default:
        // do nothing;
        break;
    }
  };

  return (
    <ProductsListContext.Provider
      value={{
        products,
        orderProducts,
      }}
    >
      {children}
    </ProductsListContext.Provider>
  );
};

export default ProductListProvider;
