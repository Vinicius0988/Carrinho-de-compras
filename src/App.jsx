import React from "react";
import Header from "./components/Header/Header";
import Products from './components/Products/Products'
import Provaider from "./Context/Provider";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Provaider>
      <Header />
      <Products />
      <Cart />
    </Provaider>
  );
}

export default App;
