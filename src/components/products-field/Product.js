import { useContext } from "react";
import Button from "../common/button/Button";
import { CartContext } from "../contexts/Cart";
import "./Product.css";

const Product = ({ product }) => {
  const { addProduct, incrementShipping } = useContext(CartContext);

  return (
    <div className="product">
      <img
        alt="cardGame"
        className="product__image"
        src={require(`../../assets/${product.image}`).default}
      />
      <section className="product__info">
        <h1 className="product__title">{product.name}</h1>
        <h2 className="product__price">{`R$ ${product.price}`}</h2>
        <p className="product__score">{`Pontuação: ${product.score}`}</p>
        <Button
          text="Adicionar ao carrinho"
          handleClick={() => {
            addProduct(product);
            incrementShipping();
          }}
        />
      </section>
    </div>
  );
};

export default Product;
