
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import BannerButom from './Components/Banner/BannerButtom/BannerButom'
import CartTitle from './Components/Cart/CartTitle/CartTitle'
import Navbar from './Components/Navbar/Navbar'
import Card from './Components/Cart/Card/Card'
import axios from 'axios'

function App() {
  const cardPromise=axios.get('cartData.json')

  const [select, setSelected]=useState(true)
 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <BannerButom></BannerButom>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <CartTitle select={select} setSelected={setSelected}></CartTitle>
          <Card cardPromise={cardPromise}></Card>
         </Suspense>
    </>
  )
}

export default App
