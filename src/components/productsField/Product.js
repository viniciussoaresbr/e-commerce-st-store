import { useContext } from "react";
import Button from "../common/button/Button";
import { CartContext } from "../contexts/Cart";

const Product = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  return (
    <div className="product" key={product.id}>
      <h1 className="product__title">{product.name}</h1>
      <h2 className="product__price">{product.price}</h2>
      <p className="product__score">{product.score}</p>
      <Button
        text="Adicionar ao carrinho"
        handleClick={() => {
          addProduct(product);
        }}
      />
    </div>
  );
};

export default Product;
