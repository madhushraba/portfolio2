import "./productList.css";
// import fbpic from "./fbpic.jpg";
import fbqn from "./fbqn.jpg";
// import jw1 from "./jw1.jpg";
// import sunglaa from "./sunglaa.jpg";

import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">TAKE A LOOK AT MY PROJECTS ❤</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
        //   <Product key={item.id} img={item.img} link={item.link} />
          <Product key={item.id} img={fbqn} link={item.link} />

          // <Product key={item.id} img={sunglaa} link={item.link} />
          // <Product key={item.id} img={fbpic} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
