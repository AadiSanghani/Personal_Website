import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#">
            {" "}
            <img src={Logo} alt="" className="w-40 " />
          </a>
          {/* Button */}
          <button className="btn btn-sm"> Contact Me </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
