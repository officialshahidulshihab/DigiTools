import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaRegCircleDot } from "react-icons/fa6";
import bannerImg from '../../assets/products/banner.png'

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto mt-15 flex flex-col  md:flex md:flex-row justify-between items-center">
      <div className="">
        <div className="badge badge-soft badge-primary">
          <FaRegCircleDot /> New: AI-Powered Tools Available
        </div>
        <div className="space-y-2">
          <h1 className="text-[32px] md:text-[60px] font-bold w-full md:w-175">
            Supercharge Your 
            Digital Workflow
          </h1>
          <p className="text-[#627382] w-full md:w-100 ">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.  Explore
            Products
          </p>
          <div className="space-x-2 mt-4">
            <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa]  rounded-2xl text-white" >Explore Products</button>
          <button className="btn btn-outline btn-primary rounded-2xl"><CiPlay1 />Watch Demo</button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img className="w-full" src={bannerImg}alt="" />
      </div>
    </div>
  );
};

export default Banner;
