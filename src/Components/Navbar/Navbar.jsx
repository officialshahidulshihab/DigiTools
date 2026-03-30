import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({click}) => {
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm justify-between items-center">
        <div className="">
          <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-xl text-transparent bg-clip-text font-bold">DigiTools</span>
        </div>

       <div className='flex gap-4'>
        <a className="text-[#101727] font-semibold" href="">Products</a>
        <a className="text-[#101727] font-semibold" href="">Features</a>
        <a className="text-[#101727] font-semibold" href="">Pricing</a>
        <a className="text-[#101727] font-semibold" href="">Testimonials</a>
        <a className="text-[#101727] font-semibold" href="">FAQ</a>
       </div>

       <div className="flex justify-between items-center gap-4">
        <p className="flex items-center"><IoCartOutline></IoCartOutline><sup className="">{click.length}</sup></p>
        <p>Login</p>
        <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa]  rounded-2xl text-white">Get Started</button>
       
       
       </div>
       
      </div>

    </div>
  );
};

export default Navbar;
