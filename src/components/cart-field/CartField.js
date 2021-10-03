import { useContext } from "react";
import { CartContext } from "../contexts/Cart";
import "./CartField.css";

const CartField = ({ classCart, classOverlay, closeCart = () => {} }) => {
  const {
    cartProducts,
    removeProduct,
    calcSubTotalPrice,
    calcTotalPrice,
    decreaseShipping,
    shipping,
  } = useContext(CartContext);

  let subTotalPrice = calcSubTotalPrice();
  let TotalPrice = calcTotalPrice(subTotalPrice);

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
            return (
              <section className="cartProduct" key={index}>
                <img
                  className="cartProduct__image"
                  src={require(`../../assets/${cartProduct.image}`).default}
                />
                <h1 className="cartProduct__quantity">
                  {cartProduct.quantity}x
                </h1>
                <h1 className="cartProduct__title">{cartProduct.name}</h1>
                <h2 className="cartProduct__price">{`R$ ${cartProduct.price}`}</h2>
                <span
                  className="cartProduct__remove"
                  onClick={() => {
                    removeProduct(index);
                    decreaseShipping();
                  }}
                >
                  X
                </span>
              </section>
            );
          })}
        </div>
        <section className="checkout">
          <div className="checkout__info">
            <h1>{`SUBTOTAL: R$ ${subTotalPrice}`}</h1>
            <h1>{`FRETE: R$ ${
              subTotalPrice > 250 ? "Frete Grátis" : shipping
            }`}</h1>
            <h1>{`TOTAL: R$ ${TotalPrice} `}</h1>
          </div>
        </section>
      </section>
    </>
  );
};

export default CartField;
