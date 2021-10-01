import "./App.css";
import ProductListProvider from "./components/contexts/productsList";
import ProductsField from "./components/productsField/ProductsField";
import CartProvider from "./components/contexts/Cart";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductListProvider>
        <CartProvider>
          <ProductsField />
        </CartProvider>
      </ProductListProvider>
    </div>
  );
}

export default App;
