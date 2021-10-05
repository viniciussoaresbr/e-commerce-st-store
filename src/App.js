import "./App.css";
import ProductListProvider from "./components/contexts/productsList";
import ProductsField from "./components/products-field/ProductsField";
import CartProvider from "./components/contexts/Cart";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";

function App() {
  return (
    <div className="App">
      <ProductListProvider>
        <CartProvider>
          <Header />
          <Filter />
          <ProductsField />
        </CartProvider>
      </ProductListProvider>
    </div>
  );
}

export default App;
