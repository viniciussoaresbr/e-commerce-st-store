import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./CartProduct.css";
const CartProduct = ({ cartProduct }) => {
  const { removeProductFromCart } = useContext(CartContext);

  return (
    <section className="cartProduct">
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
          removeProductFromCart(cartProduct);
        }}
      >
        X
      </span>
    </section>
  );
};

export default CartProduct;
