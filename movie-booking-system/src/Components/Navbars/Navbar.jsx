import React from "react";
import { assets } from "../../assets/assets";
import Logo from "./Logo";
import { MenuIcon, Search, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";

const Navbar = () => {
  return (
    <div className="fixed top-0 left- w-full  py-6 px-6 lg:px-36 md:px-16  flex items-center justify-between">
      <Logo assets={assets.logo} />

      <MenuBar/>

      <div className="flex items-center gap-8 cursor-pointer ">
        <Search className="w-6 h-6" />
        <button className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
          Login
        </button>
      </div>
      <MenuIcon className="md:hidden w-8 h-8 cursor-pointer" />
    </div>
  );
};

export default Navbar;

{
  /* <div className=' z-50 flex items-center justify-between '> */
}
