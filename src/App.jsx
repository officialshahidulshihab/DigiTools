import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import BannerButom from "./Components/Banner/BannerButtom/BannerButom";
import CartTitle from "./Components/Cart/CartTitle/CartTitle";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Cart/Card/Card";
import axios from "axios";
import Cart from "./Components/Cart/Cart";
import GetStarted from "./Components/GetStarted/GetStarted";
import Pricing from "./Components/Pricing/Pricing";

const cardPromise = axios.get("cartData.json");
function App() {
  const [select, setSelected] = useState(true);

  const [click, setClick] = useState([]);

  
  const handleRemove=()=>{
        
        setClick([])
    }

    const handleCheckout =(id)=>{
      const resetCart=click.filter(item=> item ===id)
      setClick(resetCart)
    }

  return (
    <>
      <Navbar click={click}></Navbar>
      <Banner></Banner>
      <BannerButom></BannerButom>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <CartTitle click={click} select={select} setSelected={setSelected}></CartTitle>
        {
          select? 
          <Card 
            click={click}
            setClick={setClick}
            cardPromise={cardPromise}
          ></Card> : <Cart handleCheckout={handleCheckout} handleRemove={handleRemove} click={click} setClick={setClick} cardPromise={cardPromise}></Cart>
        }

      </Suspense>
      <GetStarted></GetStarted>
      <Pricing></Pricing>
    </>
  );
}

export default App;
