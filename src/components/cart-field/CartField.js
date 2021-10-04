import { useContext } from "react";
import { CartContext } from "../contexts/Cart";
import "./CartField.css";
import CartProduct from "./CartProduct";

const CartField = ({ classCart, classOverlay, closeCart = () => {} }) => {
  const { cartProducts, calcSubTotalPrice, calcTotalPrice, calcShipping } =
    useContext(CartContext);

  let subTotalPrice = calcSubTotalPrice();
  let shipping = calcShipping();
  let TotalPrice = calcTotalPrice(subTotalPrice, shipping);

  return (
    <>
      <div className={classOverlay}></div>
      <section className={classCart}>
        <header className="cartHeader">
          <img
            className="cartHeader__closeIcon"
            src={require("../../assets/iconmonstr-arrow-68.svg").default}
            onClick={() => {
              closeCart();
            }}
          />
          <h1 className="cartHeader__title">Meu Carrinho</h1>
        </header>
        <div className="cartField__products">
          {cartProducts.map((cartProduct, index) => {
            return <CartProduct cartProduct={cartProduct} index={index} />;
          })}
        </div>
        <section className="checkout">
          <div className="checkout__info">
            <h1>{`SUBTOTAL: R$ ${subTotalPrice.toFixed(2)}`}</h1>
            <h1>{`FRETE:  ${
              subTotalPrice > 250 ? "Grátis" : "R$ " + shipping
            } `}</h1>
            <h1>{`TOTAL: R$ ${TotalPrice.toFixed(2)} `}</h1>
          </div>
        </section>
      </section>
    </>
  );
};

export default CartField;
