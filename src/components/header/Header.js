import { useContext, useState } from "react";
import CartField from "../cart-field/CartField";
import { CartContext } from "../contexts/Cart";
import "./Header.css";
const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <header
        className="header"
        id={cartProducts.length > 0 ? "headerPipe-green" : "headerPipe-red"}
      >
        <h1 className="header__title">
          Games <span className="header__title-red">Store</span>
        </h1>
        <img
          className="header__cart"
          src={require("../../assets/cart-icon.svg").default}
          onClick={() => {
            setShowCart(true);
          }}
        ></img>
      </header>
      <CartField
        classOverlay={showCart ? "overlay" : "overlay-none"}
        classCart={showCart ? "cartField" : "cartField-hidden"}
        closeCart={() => {
          setShowCart(false);
        }}
      />
    </>
  );
};

export default Header;
