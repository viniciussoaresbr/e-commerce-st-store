import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import Button from "../../common/button/Button";
import "./Product.css";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <div className="product">
      <img
        alt=""
        className="product__image"
        src={require(`../../../assets/${product.image}`).default}
      />
      <section className="product__info">
        <h1 className="product__title">{product.name}</h1>
        <h2 className="product__price">
          {`R$ ${product.price}`.replace(".", ",")}
        </h2>
        <p className="product__score">{`Pontuação: ${product.score}`}</p>
        <Button
          text="Adicionar ao carrinho"
          handleClick={() => {
            addProductToCart(product);
            toast.success("Item adicionado ao carrinho");
          }}
        />
      </section>
    </div>
  );
};

export default Product;
