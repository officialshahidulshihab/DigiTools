import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingDisplay = ({ price }) => {
 
  const features = price.features;
  
  
  return (
    <div className="">
        <div className="bg-base-100 border-base-300 p-5 rounded-lg ">

        <p>{price.name}</p>
        <p>{price.tagline}</p>
        <p>$ {price.monthlyPrice}/{price.period}</p>
       {
        features.map((item, i)=><PricingFeatures item={item} key={i} ></PricingFeatures>)
       }


        </div>
      
    </div>
  );
};

export default PricingDisplay;
