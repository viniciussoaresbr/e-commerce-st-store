import { useContext } from "react";
import { ProductsListContext } from "../contexts/productsList";

import Product from "./Product";

const ProductsField = () => {
  const { products } = useContext(ProductsListContext);

  return (
    <section className="productField">
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </section>
  );
};

export default ProductsField;
