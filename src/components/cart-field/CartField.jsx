import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./CartField.css";
import CartProduct from "./CartProduct";
import Button from "../common/button/Button";

const CartField = ({ classCart, classOverlay, closeCart = () => {} }) => {
  const { state } = useContext(CartContext);

  return (
    <>
      <div className={classOverlay}></div>
      <section className={classCart}>
        <header className="cartHeader">
          <img
            alt=""
            className="cartHeader__closeIcon"
            src={require("../../assets/iconmonstr-arrow-68.svg").default}
            onClick={() => {
              closeCart();
            }}
          />
          <h1 className="cartHeader__title">Meu Carrinho</h1>
        </header>
        <div className="cartField__products">
          {state.cartProducts.map(cartProduct => {
            return (
              <CartProduct cartProduct={cartProduct} key={cartProduct.id} />
            );
          })}
        </div>
        <section className="checkout">
          <div className="checkout__info">
            <h1>{`SUBTOTAL: R$ ${state.subtotal.toFixed(2)}`}</h1>
            <h1>{`FRETE:  ${
              state.subtotal > 250 ? "Grátis" : "R$ " + state.shipping
            } `}</h1>
            <h1>{`TOTAL: R$ ${state.total.toFixed(2)} `}</h1>
          </div>
          <Button text="Finalizar Compra" myId="btn--finish" />
        </section>
      </section>
    </>
  );
};

export default CartField;
