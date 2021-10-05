import { useContext } from "react";
import { CartContext } from "../contexts/Cart";
import "./CartProduct.css";
const CartProduct = ({ cartProduct, index }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <section className="cartProduct" key={cartProduct.id}>
      <img
        alt=""
        className="cartProduct__image"
        src={require(`../../assets/${cartProduct.image}`).default}
      />
      <h1 className="cartProduct__quantity">{cartProduct.quantity}x</h1>
      <h1 className="cartProduct__title">{cartProduct.name}</h1>
      <h2 className="cartProduct__price">{`R$ ${cartProduct.price}`}</h2>
      <span
        className="cartProduct__remove"
        onClick={() => {
          removeProduct(index);
        }}
      >
        X
      </span>
    </section>
  );
};

export default CartProduct;
