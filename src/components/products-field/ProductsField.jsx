import { useContext } from "react";
import { ProductsListContext } from "../../contexts/ProductsListContext";
import "./productsField.css";
import Product from "./product/Product";

const ProductsField = () => {
  const { products } = useContext(ProductsListContext);

  return (
    <section className="productField">
      {products.map(product => {
        return <Product product={product} key={product.id} />;
      })}
    </section>
  );
};

export default ProductsField;
