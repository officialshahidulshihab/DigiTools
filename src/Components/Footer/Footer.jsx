import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className=" w-11/12 mx-auto p-8 grid grid-cols-5 gap-4">
        <div>
          <p className="text-white text-[26px] font-bold">DigiTools</p>
          <p className="text-white">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>

        <div>
          <p className="text-[18px] text-white">Product</p>
          <p className="text-white">Features</p>
          <p className="text-white">Pricing</p>
          <p className="text-white">Templates</p>
          <p className="text-white">Integrations</p>
        </div>

        <div>
          <p className="text-[18px] text-white">Company</p>
          <p className="text-white">About</p>
          <p className="text-white">Blog</p>
          <p className="text-white">Careers</p>
          <p className="text-white">Press</p>
        </div>
        <div>
          <p className="text-[18px] text-white">Resources</p>
          <p className="text-white">Documentation</p>
          <p className="text-white">Help Center</p>
          <p className="text-white">Community</p>
          <p className="text-white">Contact</p>
        </div>

        <div>
          <p className="text-[18px] text-white">Social Links</p>
          <div className=" flex items-center gap-5">
            <span className="text-white">
            <FaInstagramSquare />
          </span>

          <span className="text-white">
            <FaSquareFacebook />
          </span>
          <span className="text-white"><FaXTwitter /></span>
          </div>
        </div>
      </div>

      <div className=" w-11/12 mx-auto">
      <div className="divider divider-neutral"></div>
      <div className="flex justify-between items-center p-2">
        <div>
            <p className="text-[#FAFAFA]">© 2026 Digitools. All rights reserved.</p>
        </div>
        <div className="text-[#FAFAFA] flex  items-center gap-10">
            <p>Privacy Policy </p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>
      </div>

      </div>

      
      


    </div>
  );
};

export default Footer;
