import { useContext } from "react";
import { ProductsListContext } from "../contexts/productsList";
import "./Order.css";

const Order = () => {
  const { orderProducts } = useContext(ProductsListContext);

  return (
    <section className="order">
      <select
        defaultValue="default"
        name="select"
        className="order__select"
        onChange={(event) => {
          orderProducts(event.target.value);
        }}
      >
        <option value="default" label="Ordenar por:" disabled></option>
        <option value="alphabeticalOrder">A - Z</option>
        <option value="score">Pontuação</option>
        <option value="lowerPrice">Menor Preço</option>
        <option value="higherPrice">Maior Preço</option>
      </select>
    </section>
  );
};

export default Order;
