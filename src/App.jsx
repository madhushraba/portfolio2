import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/intro/Intro";
// import Product from "./Components/product/Product";
import ProductList from "./Components/productList/ProductList";

export default function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProductList/>
      <Contact/>
      {/* <Product/> */}
    </div>
  );
}
