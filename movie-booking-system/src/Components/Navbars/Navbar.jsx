import React from "react";
import { assets } from "../../assets/assets";
import Logo from "./Logo";
import { MenuIcon, Search, XIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left- w-full  py-6 px-6 lg:px-36 md:px-16  flex items-center justify-between">
      <Logo assets={assets.logo} />

      <div
        className="max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300">
        <XIcon className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer" />
        <Link to="/">Home</Link>
        <Link to="/movie">Movie</Link>
        <Link to="/">Theaters</Link>
        <Link to="/">Released</Link>
        <Link to="/favourite">Favourite</Link>
      </div>

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
