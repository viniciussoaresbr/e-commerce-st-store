import { useContext } from "react";
import { ProductsListContext } from "../../contexts/ProductsListContext";
import "./productsField.css";
import Product from "./product/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ProductsField = () => {
  const { products } = useContext(ProductsListContext);

  return (
    <>
      <ToastContainer />
      <section className="productField">
        {products.map(product => {
          return <Product product={product} key={product.id} />;
        })}
      </section>
    </>
  );
};

export default ProductsField;
