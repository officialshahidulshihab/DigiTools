import React from "react";
import { FaCheck } from "react-icons/fa6";

const CardDisplay = ({ product }) => {
  
  const features=product.features
  console.log(features);

console.log(product);

  return (
    <div >
      <div className="card  bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <span className="text-[24px]">{product.icon}</span>
            <span className="badge badge-xs badge-warning">{product.tag}</span>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <span className="text-xl">${product.price}/{product.period}</span>
          </div>
          <ul className="space-y-2" >
            {
                features.map(list=><li className="font-semibold flex items-center gap-2"><FaCheck className="text-green-400" />{list}</li>)
            }
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
