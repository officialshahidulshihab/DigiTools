import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ click }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm justify-between items-center">
        <div className="flex  items-center gap-2">
          <span className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu />
          </span>
          <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-xl text-transparent bg-clip-text font-bold">
            DigiTools
          </span>
        </div>
        {menuOpen && (
          <div className="md:hidden absolute top-11 flex flex-col gap-3 p-4 bg-base-100">
            <a href="">Products</a>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Testimonials</a>
            <a href="">FAQ</a>
            <p>Login</p>
            <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-2xl text-white">
              Get Started
            </button>
          </div>
        )}

        <div className="hidden md:flex gap-4">
          <a className="text-[#101727] font-semibold" href="">
            Products
          </a>
          <a className="text-[#101727] font-semibold" href="">
            Features
          </a>
          <a className="text-[#101727] font-semibold" href="">
            Pricing
          </a>
          <a className="text-[#101727] font-semibold" href="">
            Testimonials
          </a>
          <a className="text-[#101727] font-semibold" href="">
            FAQ
          </a>
        </div>

        <div className="flex justify-between items-center gap-4">
          <p className="flex items-center">
            <IoCartOutline></IoCartOutline>
            <sup className="">{click.length}</sup>
          </p>
          <p className="hidden md:flex">Login</p>
          <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa]  rounded-2xl text-white hidden md:flex">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
