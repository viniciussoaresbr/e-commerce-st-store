import "./App.css";
import ProductsField from "../components/products-field/ProductsField";
import Header from "../components/header/Header";
import Order from "../components/order/Order";
import ProductListProvider from "../contexts/ProductsListContext";
import CartProvider from "../contexts/CartContext";

function App() {
  return (
    <div className="App">
      <ProductListProvider>
        <CartProvider>
          <Header />
          <Order />
          <ProductsField />
        </CartProvider>
      </ProductListProvider>
    </div>
  );
}

export default App;
