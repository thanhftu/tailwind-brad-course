import logo from "../assets/img/logo.svg";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative container mx-auto p-6">
      <div className="flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={logo} alt="Logo" />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-4 items-center md:flex">
          <a href="#" className="hover:text-veryDarkBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-veryDarkBlue">
            Products
          </a>
          <a href="#" className="hover:text-veryDarkBlue">
            About
          </a>
          <a href="#" className="hover:text-veryDarkBlue">
            Careers
          </a>
          <a href="#" className="hover:text-veryDarkBlue">
            Community
          </a>
        </div>
        {/* buttom */}
        <a
          href="#"
          className="hidden md:block px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
        >
          Get Started
        </a>

        {/* Hamburger Menu */}
        <button
          onClick={MenuOpenHandler}
          className="block cursor-pointer w-[24px] h-[24px] relative md:hidden transition-all"
        >
          <span
            className={`absolute top-[7px] left-0 w-full h-[2px] bg-black -translate-y-[7px]
            ${isOpen ? "translate-y-[7px] rotate-45" : ""}
          `}
          ></span>
          <span
            className={`absolute top-[7px] left-0 w-full h-[2px] bg-black 
            ${isOpen ? "hidden" : ""}       
          `}
          ></span>
          <span
            className={`absolute top-[7px] left-0 w-full h-[2px] bg-black translate-y-[7px]
                ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}         
          `}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            className={`absolute  flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md
                ${isOpen ? "flex" : "hidden"}
  
            `}
          >
            <a href="#">Pricing</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
