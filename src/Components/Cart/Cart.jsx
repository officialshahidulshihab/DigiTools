import React, { use } from "react";
import { IoCartOutline } from "react-icons/io5";
import CartDisplay from "./CartTitle/CartDisplay";

const Cart = ({click, cardPromise, handleRemove}) => {
    const cardDataProcessCart=use(cardPromise)
     const cardCartData=cardDataProcessCart.data.cart
     
     const cardProductData=cardCartData.products
     
     const cartData=cardProductData.filter(item=>click.includes(item.id));
    
  return (
    <div className="w-11/12 mx-auto mt-20 mb-20">
      <div className="card bg-base-100   shadow-sm">
        <div className="card-body">
          <p className="text-xl font-bold">Your Cart</p>

          {
            cartData.length===0? 
          <div className="mx-auto mt-5 mb-2">
            <p className="text-9xl text-gray-400"><IoCartOutline /></p>
            <p className="text-gray-400 text-center">Your cart is empty</p>
          </div> : cartData.map((prod, i)=><CartDisplay handleRemove={handleRemove} prod={prod} key={i}></CartDisplay>)
          }

          
        </div>
      </div>
    </div>
  );
};

export default Cart;
