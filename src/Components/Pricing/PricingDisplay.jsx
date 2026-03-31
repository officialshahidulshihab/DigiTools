import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingDisplay = ({ price }) => {
 
  const features = price.features;
  
  
  return (
    <div className="mt-7 mb-7 relative">
      {
        price.highlighted? <p className="absolute -top-3 left-30  md:left-40   badge badge-warning">{price.tag}</p>: ''
      }
      
        <div className={` ${price.highlighted? 'card-body p-5 rounded-lg bg-linear-to-r from-[#4f39f6] to-[#9514fa]' : 'card-body bg-base-200 border-base-300 p-5 rounded-lg '}`}>
          

        <p className={` text-[20px] md:text-[24px] font-bold ${price.highlighted? "text-white" :"text-[#101727]"} `}>{price.name}</p>
        <p className={` ${price.highlighted? "text-white" :"text-[#627382]"}`}>{price.tagline}</p>
        <p className=""><span className={`text-[20px] md:text-[30px] font-bold ${price.highlighted? "text-white" :"text-[#101727]"}`}>${price.monthlyPrice}</span><span className={` ${price.highlighted? "text-white" :"text-[#627382]"}`}>/{price.period}</span></p>
       {
        features.map((item, i)=><PricingFeatures price={price} item={item} key={i} ></PricingFeatures>)
       }

       {/* <button className="mt-3 bg-base-100 rounded-2xl"><span className={`${price.highlighted? 'btn   rounded-2xl w-full bg-base-100  bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text ' :'btn bg-linear-to-r from-[#4f39f6] to-[#9514fa]  rounded-2xl text-white w-full'}  `}>{price.cta}</span></button> */}

       {
        price.highlighted ?  <button className=" btn bg-white rounded-2xl w-full mt-3"><span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text">{price.cta}</span></button> : <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa]  rounded-2xl text-white w-full mt-3">{price.cta}</button>
       }


        </div>
      
    </div>
  );
};

export default PricingDisplay;


