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
import ReadyToTransfrom from "./Components/ReadyToTrasfrom/ReadyToTransfrom";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

const cardPromise = axios.get("cartData.json");

const pricingPromise= axios.get("pricing.json")
function App() {
  const [select, setSelected] = useState(true);

  const [click, setClick] = useState([]);

  
  const handleRemove=(id)=>{
    const filterCheck=click.filter(item => item !==id)
        
        setClick(filterCheck)
        toast.error("Item removed!")

    }

    const handleCheckout =()=>{
      
      setClick([])
      toast.success("Order placed!")
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
      <Pricing pricingPromise={pricingPromise}></Pricing>
      <ReadyToTransfrom></ReadyToTransfrom>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
