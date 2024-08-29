import ImageRound from "./components/ImageRound";
import OurProduct from "./components/OurProduct";
import Cart from "./components/Cart";
import TitleCart from "./components/TitleCart";
import PriceCart from "./components/PriceCart";

export default function App() {
  return (
    <div className="mainContent">
      <div className="card">
        <div className="cardTop">
          <ImageRound 
            className="cardTop"
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
        </div>

        <div className="cardTitle">Our Products</div>

        <OurProduct />
      </div>

      {/* cart */}
      <div className="card">
        <TitleCart />

        <div className="cardTitle">
          <span>Your cart</span>
          <PriceCart />
        </div>

        <div className="cardBody">
          <Cart />
        </div>
      </div>
    </div>
  );
}
